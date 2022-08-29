import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    Edit,
    EmailField,
    PasswordInput,
    SimpleForm,
    ReferenceInput,
    Create,
    SelectInput,
    TextInput} from 'react-admin';
import UnityField from "./Fields/UnityField";
export const StaffList = () => (
    <List>
        <Datagrid rowClick="edit">
            <UnityField source="unity_id" />
            <TextField source="user.username" label="Username"/>
            <TextField source="cpf" />
        </Datagrid>
    </List>
);

export const StaffEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput  label="Unity" source="unity_id" reference="unity">
                <SelectInput optionText="user.username" />
            </ReferenceInput>
            <TextInput source="cpf" />
        </SimpleForm>
    </Edit>
);


export const StaffCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Unity" source="unity_id" reference="unity">
                <SelectInput optionText="user.username" />
            </ReferenceInput>
            <TextInput source="user.first_name" label="First Name"/>
            <TextInput source="user.last_name"  label="Last Name"/>
            <TextInput source="user.email"  label="E-Mail"/>
            <TextInput source="user.username"  label="Username"/>
            <PasswordInput source="user.password" />
            <TextInput source="cpf"  label="CPF"/>
        </SimpleForm>
    </Create>
);