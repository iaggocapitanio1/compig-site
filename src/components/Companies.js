import * as React from "react";
import { List, Datagrid, TextField} from 'react-admin';

export const CompanyList = () => (
    <List>
        <Datagrid rowClick="edit">
        <TextField source="user.id" />
        <TextField source="cnpj" />
        </Datagrid>
    </List>
);