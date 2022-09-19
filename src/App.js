import * as React from "react";
import { Admin, Resource} from 'react-admin';
import drfProvider, { jwtTokenAuthProvider, fetchJsonWithAuthJWTToken} from 'ra-data-django-rest-framework';
import { TruckList, TruckEdit, TruckCreate } from "./components/Trucks";
import { ProducerList, ProducerEdit , ProducerCreate} from "./components/Producers";
import { LoadingList, LoadingEdit } from "./components/Loadings";
import { OperatorList, OperatorEdit , OperatorCreate} from "./components/Operators";
import { TruckDriverList, TruckDriverEdit, TruckDriverCreate} from "./components/TruckDrivers";
import { UnityList, UnityEdit, UnityCreate} from "./components/Unities";
import { StaffList, StaffEdit, StaffCreate} from "./components/Staffs";
import { CompanyList,  CompanyEdit} from "./components/Companies";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EngineeringIcon from '@mui/icons-material/Engineering';
import FactoryIcon from '@mui/icons-material/Factory';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import PersonIcon from '@mui/icons-material/Person';
import {TbSteeringWheel} from "react-icons/tb";
import Dashboard from "./components/Dashboard";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import theme from "./style/Theme";
const API_URL = 'https://compig-server.herokuapp.com/api/v1';
//"http://127.0.0.1:8000/api/v1"
const authProvider = jwtTokenAuthProvider({ obtainAuthTokenUrl: API_URL + '/obtain-token/'});
const dataProvider = drfProvider(API_URL, fetchJsonWithAuthJWTToken);


const App = () => (
  <Admin theme={theme} dataProvider={dataProvider} authProvider={authProvider} dashboard={Dashboard} title="Compig Api">
    <Resource name="company" list={CompanyList} edit={CompanyEdit} />
    <Resource name="unity" list={UnityList} edit={UnityEdit}  create={UnityCreate} icon={FactoryIcon} />
    <Resource name="staff" list={StaffList} edit={StaffEdit} create={StaffCreate} icon={PersonIcon}/>
    <Resource name="loading" list={LoadingList} edit={LoadingEdit}  icon={DonutLargeIcon}  />
    <Resource name="operator" list={OperatorList} edit={OperatorEdit} create={OperatorCreate} icon={EngineeringIcon} />
    <Resource name="producer" list={ProducerList} edit={ProducerEdit} create={ProducerCreate}  icon={WarehouseIcon} />
    <Resource name="truck-driver" list={TruckDriverList} edit={TruckDriverEdit}  create={TruckDriverCreate} icon={TbSteeringWheel}/>
    <Resource name="truck" list={TruckList} edit={TruckEdit}  create={TruckCreate} icon={LocalShippingIcon} />   
  </Admin>
);

export default App;
