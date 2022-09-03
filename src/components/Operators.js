import * as React from "react";
import { useMediaQuery } from '@mui/material';
import {
    List,
    Datagrid,
    TextField,
    SimpleList,
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    useRecordContext,
    Create,
    TextInput,
} from 'react-admin';
import UnityField from "./Fields/UnityField";

const OperatorTitle = () => {
    const record = useRecordContext();
    return <span>Operator:  {record ? `${record.first_name}` +' ' + `${record.last_name}` : ''}</span>;
 };


export const OperatorList = () => {
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
                <UnityField source="unity_id" label="First Name"/>
                <TextField source="first_name" label="Last Name"/>
                <TextField source="cpf" label="CPF"/>
                </Datagrid>
            )}
         
        </List>
    )
};

export const OperatorEdit = () => (
    <Edit title={<OperatorTitle/>}>
        <SimpleForm>
            <ReferenceInput  label="Unity" source="unity_id" reference="unity">
                <SelectInput optionText="user.username" />
            </ReferenceInput>
            <TextInput source="first_name" label="First Name"/>
            <TextInput source="last_name" label="Last Name"/>
            <TextInput source="cpf" label="CPF" />
        </SimpleForm>
    </Edit>
);



export const OperatorCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Unity" source="unity_id" reference="unity">
                <SelectInput optionText="user.username" />
            </ReferenceInput>
            <TextInput source="first_name" label="First Name"/>
            <TextInput source="last_name"  label="Last Name"/>
            <TextInput source="cpf"  label="CPF"/>
        </SimpleForm>
    </Create>
);