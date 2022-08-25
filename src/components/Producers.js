import * as React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const ProducerList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="unity" />
            <TextField source="name" />
            <TextField source="grange" />
            <TextField source="cpf_cnpj" />
        </Datagrid>
    </List>
);