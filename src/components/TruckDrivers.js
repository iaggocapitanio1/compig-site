import * as React from "react";
import { useMediaQuery } from '@mui/material';
import {  
    List,
    Datagrid,
    TextField,
    SimpleList,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    DateInput,
    DateTimeInput} from 'react-admin';
import UnityField from "./Fields/UnityField";

export const TruckDriverList = () => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={ele => ele.first_name}
                    secondaryText={element => (<UnityField label="Unity" source="unity_id" />)}
                />

            ) : (
                <Datagrid rowClick="edit">
            <UnityField source="unity_id" />
            <TextField source="first_name" />
            <TextField source="cpf" />
            </Datagrid>
            )}
            
        </List>
    );
}

export const TruckDriverEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput  label="Unity" source="unity_id" reference="unity">
                <SelectInput optionText="user.username" />
            </ReferenceInput>
            <TextInput source="first_name" />
            <TextInput source="last_name" />
            <TextInput source="cpf" />
        </SimpleForm>
    </Edit>
);