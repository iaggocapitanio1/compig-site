import * as React from "react";
import { List, Datagrid, TextField} from 'react-admin';
import UnityField from "./Fields/UnityField";

export const ProducerList = () => (
    <List>
        <Datagrid rowClick="edit">
            <UnityField source="unity_id" />
            <TextField source="name" />
            <TextField source="grange" />
            <TextField source="cpf_cnpj" />
        </Datagrid>
    </List>
);