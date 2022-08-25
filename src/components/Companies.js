import * as React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const CompanyList = () => (
    <List>
        <Datagrid rowClick="edit">
        <TextField source="user.id" />
        <TextField source="cnpj" />
        </Datagrid>
    </List>
);