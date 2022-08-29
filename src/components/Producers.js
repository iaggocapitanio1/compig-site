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
    useRecordContext,
    TextInput
} from 'react-admin';
import UnityField from "./Fields/UnityField";


const ProducerTitle = () => {
    const record = useRecordContext();
    return <span>Producer:  {record ? `${record.name}` : ''}</span>;
};


export const ProducerList = () => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={ele => ele.name}
                    secondaryText={element => (<UnityField label="Unity" source="unity_id" />)}
                />

            ) : (
                <Datagrid rowClick="edit">
                    <UnityField source="unity_id" />
                    <TextField source="name" />
                    <TextField source="grange" />
                    <TextField source="cpf_cnpj" />
                </Datagrid>
            )}

        </List>
    )
};
export const ProducerEdit = () => (
    <Edit title={<ProducerTitle />}>
        <SimpleForm>
            <ReferenceInput label="Unity" source="unity_id" reference="unity">
                <SelectInput optionText="user.username" />
            </ReferenceInput>
            <TextInput source="name" />
            <TextInput source="grange" />
            <TextInput source="cpf_cnpj" />
        </SimpleForm>
    </Edit>
);


export const ProducerCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Unity" source="unity_id" reference="unity">
                <SelectInput optionText="user.username" />
            </ReferenceInput>
            <TextInput source="name" />
            <TextInput source="grange" />
            <TextInput source="cpf_cnpj" />
        </SimpleForm>
    </Create>
);