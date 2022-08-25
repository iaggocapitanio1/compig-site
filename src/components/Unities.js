import * as React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const UnityList = () => (
    <List>
        <Datagrid rowClick="edit">
        <TextField source="company" />
        <TextField source="postal_code" />
        </Datagrid>
    </List>
);