import * as React from "react";
import { Admin, Resource} from 'react-admin';
import drfProvider, { jwtTokenAuthProvider, fetchJsonWithAuthJWTToken} from 'ra-data-django-rest-framework';
import { TruckList } from "./components/Trucks";
import { ProducerList } from "./components/Producers";
import { LoadingList } from "./components/Loadings";
import { OperatorList } from "./components/Operators";
import { TruckDriverList } from "./components/TruckDrivers";
import { UnityList } from "./components/Unities";
import { StaffList } from "./components/Staffs";
import { CompanyList } from "./components/Companies";

const API_URL = 'http://127.0.0.1:8000/api/v1';

const authProvider = jwtTokenAuthProvider({ obtainAuthTokenUrl: API_URL + '/obtain-token/'});
const dataProvider = drfProvider(API_URL, fetchJsonWithAuthJWTToken);

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name="truck" list={TruckList} />
      <Resource name="producer" list={ProducerList} />
      <Resource name="operator" list={OperatorList} />
      <Resource name="truck-driver" list={TruckDriverList} />
      <Resource name="loading" list={LoadingList} />
      <Resource name="unity" list={UnityList} />
      <Resource name="staff" list={StaffList} />
      <Resource name="company" list={CompanyList} />
  </Admin>
);

export default App;
