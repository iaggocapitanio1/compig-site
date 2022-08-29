import * as React from "react";
import { List, Datagrid, TextField,NumberField } from 'react-admin';
import UnityField from "./Fields/UnityField";

export const LoadingList = () => (
    <List>
        <Datagrid rowClick="edit">
        <TextField source="created" />
        <UnityField source="unity_id" />
        <NumberField source="quantity" />
        <NumberField source="cargo" />
        
        </Datagrid>
    </List>
);
