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
    TextInput} from 'react-admin';

import CompanyField from './Fields/CompanyField'

const UnityTitle = () => {
    const record = useRecordContext();
    return <span>Unity:  {record ? `${record.user.username}` : ''}</span>;
 };


export const UnityList = () => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List>
             {isSmall ? (
                <SimpleList
                    primaryText={ele => ele.user.username}
                    secondaryText={element => (<CompanyField label="Company" source="company_id" />)}
                />

            ) : (
                <Datagrid rowClick="edit">
            <CompanyField source="company_id" />
            <TextField source="postal_code" />
            </Datagrid>
            )}
           
        </List>
    );
};

export const UnityEdit = () => (
    <Edit title={<UnityTitle/>}>
        <SimpleForm>
            <ReferenceInput  label="Company" source="company_id" reference="company">
                <SelectInput optionText="user.username" />
            </ReferenceInput>
            <TextInput source="postal_code" />
        </SimpleForm>
    </Edit>
);