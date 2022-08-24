import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import drfProvider, { jwtTokenAuthProvider, fetchJsonWithAuthJWTToken} from 'ra-data-django-rest-framework';

const authProvider = jwtTokenAuthProvider({
  obtainAuthTokenUrl: 'http://127.0.0.1:8000/api/v1/obtain-token/'
})
const dataProvider = drfProvider("http://127.0.0.1:8000/api/v1", fetchJsonWithAuthJWTToken);

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name="truck" list={ListGuesser} />
  </Admin>
);

export default App;
