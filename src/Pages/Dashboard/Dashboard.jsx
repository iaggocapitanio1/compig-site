import * as React from "react";
import { Card, CardContent, CardHeader } from '@mui/material';
import LoadsCard from "./components/LoadsCard";
import {   useDataProvider} from 'react-admin';
import decodeJwt from 'jwt-decode';
const Dashboard = () => {
    // const token = decodeJwt(localStorage.getItem("access"));
    // const user_id = token.user_id
    const dataProvider = useDataProvider();
    return (
    <div className="dashboard">
        {/* <LoadsCard /> */}
        <Card>
            <CardHeader title="" />
            <CardContent>Lorem ipsum sic dolor amet...</CardContent>
        </Card>

    </div>)


};

export default Dashboard;