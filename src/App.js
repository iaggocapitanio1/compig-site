import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import drfProvider, { jwtTokenAuthProvider, fetchJsonWithAuthJWTToken} from 'ra-data-django-rest-framework';

const API_URL = 'http://127.0.0.1:8000/api/v1';

const authProvider = jwtTokenAuthProvider({ obtainAuthTokenUrl: API_URL + '/obtain-token/'});
const dataProvider = drfProvider(API_URL, fetchJsonWithAuthJWTToken);

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name="truck" list={ListGuesser} />
      <Resource name="producer" list={ListGuesser} />
      <Resource name="operator" list={ListGuesser} />
      <Resource name="truck-driver" list={ListGuesser} />
      <Resource name="loading" list={ListGuesser} />
      <Resource name="unity" list={ListGuesser} />
      <Resource name="staff" list={ListGuesser} />
      <Resource name="company" list={ListGuesser} />
  </Admin>
);

export default App;
