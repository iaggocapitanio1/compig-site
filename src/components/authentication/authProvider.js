const BASE_URL = "http://127.0.0.1:8000/api/v1/";

const authProvider = {
    login: async ({ username, password }) => {
        const request = new Request(BASE_URL+'obtain-token/', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        const response = await fetch(request);
        if (response.ok) {
          const responseJSON = await response.json();
          localStorage.setItem('access', responseJSON.access);
          localStorage.setItem('refresh', responseJSON.refresh);
          return;
        }
        if (response.headers.get('content-type') !== 'application/json') {
          throw new Error(response.statusText);
        }
  
        const json = await response.json();
        const error = json.non_field_errors;
        throw new Error(error || response.statusText);
      },
    // called when the API returns an error
    checkError: error => {
        const status = error.status;
        if (status === 401 || status === 403) {
          localStorage.removeItem('access');
          localStorage.removeItem('refresh');
          return Promise.reject();
        }
        return Promise.resolve();
      },
      logout: () => {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        return Promise.resolve();
      },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: async () => localStorage.getItem('access') ? Promise.resolve() : Promise.reject(),

    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};

export default authProvider;