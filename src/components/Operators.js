import * as React from "react";
import { List, Datagrid, TextField} from 'react-admin';
import UnityField from "./Fields/UnityField";
export const OperatorList = () => (
    <List>
        <Datagrid rowClick="edit">
        <UnityField source="unity_id" />
        <TextField source="first_name" />
        <TextField source="cpf" />
        </Datagrid>
    </List>
);