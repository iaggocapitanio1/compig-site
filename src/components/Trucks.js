import * as React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const TruckList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="unity" />
            <TextField source="license_plate" />
        </Datagrid>
    </List>
);