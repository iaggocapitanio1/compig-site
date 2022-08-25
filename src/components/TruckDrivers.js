import * as React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const TruckDriverList = () => (
    <List>
        <Datagrid rowClick="edit">
        <TextField source="unity" />
        <TextField source="first_name" />
        <TextField source="cpf" />
        </Datagrid>
    </List>
);