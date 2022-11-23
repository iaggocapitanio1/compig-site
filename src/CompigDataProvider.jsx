

const CompigDataProvider = (dataProvider, apiUrl, httpClient) => ({
  ...dataProvider,

  
  updateUserProfile(params) {
    localStorage.setItem("profile", JSON.stringify({ id: 'unique-id', ...params.data }));
    return Promise.resolve({ data: params.data });
  },
  getAccount: async resource => {
    const response = await httpClient(`${apiUrl}/${resource}`)
    return response;

  }
})
export default CompigDataProvider;
