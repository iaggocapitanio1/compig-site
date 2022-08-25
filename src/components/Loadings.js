import * as React from "react";
import { List, Datagrid, TextField, EmailField, NumberField } from 'react-admin';

export const LoadingList = () => (
    <List>
        <Datagrid rowClick="edit">
        <TextField source="created" />
        <TextField source="unity" />
        <NumberField source="quantity" />
        <NumberField source="cargo" />
        
        </Datagrid>
    </List>
);
