import * as React from "react";
import { Admin, Resource, EditGuesser } from 'react-admin';
import drfProvider, { jwtTokenAuthProvider, fetchJsonWithAuthJWTToken} from 'ra-data-django-rest-framework';
import { TruckList, TruckEdit} from "./components/Trucks";
import { ProducerList } from "./components/Producers";
import { LoadingList } from "./components/Loadings";
import { OperatorList } from "./components/Operators";
import { TruckDriverList, TruckDriverEdit } from "./components/TruckDrivers";
import { UnityList } from "./components/Unities";
import { StaffList } from "./components/Staffs";
import { CompanyList } from "./components/Companies";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EngineeringIcon from '@mui/icons-material/Engineering';
import FactoryIcon from '@mui/icons-material/Factory';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import PersonIcon from '@mui/icons-material/Person';
import {TbSteeringWheel} from "react-icons/tb";
import Dashboard from "./components/Dashboard";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
/* import {GiPig }from "react-icons/gi"; */

const API_URL = 'http://127.0.0.1:8000/api/v1';

const authProvider = jwtTokenAuthProvider({ obtainAuthTokenUrl: API_URL + '/obtain-token/'});
const dataProvider = drfProvider(API_URL, fetchJsonWithAuthJWTToken);


const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} dashboard={Dashboard}>
    <Resource name="company" list={CompanyList} edit={EditGuesser} />
    <Resource name="unity" list={UnityList} edit={EditGuesser}  icon={FactoryIcon} />
    <Resource name="staff" list={StaffList} edit={EditGuesser}  icon={PersonIcon}/>
    <Resource name="loading" list={LoadingList} edit={EditGuesser}  icon={DonutLargeIcon}  />
    <Resource name="operator" list={OperatorList} edit={EditGuesser} icon={EngineeringIcon} />
    <Resource name="producer" list={ProducerList} edit={EditGuesser}  icon={WarehouseIcon} />
    <Resource name="truck-driver" list={TruckDriverList} edit={TruckDriverEdit} icon={TbSteeringWheel}/>
    <Resource name="truck" list={TruckList} edit={TruckEdit} icon={LocalShippingIcon} />   
  </Admin>
);

export default App;
