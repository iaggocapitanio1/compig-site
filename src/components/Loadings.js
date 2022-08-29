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
    TextInput,
    DateTimeInput,
    NumberInput,
    ChipField,
    SelectArrayInput,
    ReferenceArrayInput,
    useRecordContext,
    NumberField} from 'react-admin';
import UnityField from "./Fields/UnityField";

const LoadingTitle = () => {
    const record = useRecordContext();
    return <span>Loading:  {record ? `${record.created}` : ''}</span>;
 };

/*  const loadingFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="loading_cargo" reference="loading" />,
    
   
]; */

export const LoadingList = () => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={ele => ele.start_time?ele.start_time:ele.created}
                    secondaryText={element => (<UnityField label="Unity" source="unity_id" />)}
                />

            ) : (
            <Datagrid rowClick="edit">
            <TextField source="created" />
            <UnityField source="unity_id" />
            <NumberField source="gta" />
            <NumberField source="cargo" />
            
            </Datagrid>
            )}
            
        </List>
    )
};

export const LoadingEdit = () => (
    <Edit title={<LoadingTitle/>}>
        <SimpleForm>
            <ReferenceInput  label="Unity" source="unity_id" reference="unity">
                <SelectInput optionText="user.username" />
            </ReferenceInput>
            <ReferenceInput  label="Truck" source="truck_id" reference="truck">
                <SelectInput optionText="license_plate" />
            </ReferenceInput>
            <ReferenceInput  label="Driver" source="driver_id" reference="truck-driver">
                <SelectInput optionText="first_name" />
            </ReferenceInput>
            <ReferenceInput  label="Producer" source="producer_id" reference="producer">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceArrayInput reference="operator" source="operators_id">
            <SelectArrayInput optionText="first_name">
            <ChipField source="id" />
            </SelectArrayInput>
            </ReferenceArrayInput>
            
            <NumberInput source="quantity" />
            <NumberInput source="gta" />
            <NumberInput source="offset" />
            <NumberInput source="cargo" />
            <DateTimeInput source="start_time" />
            <DateTimeInput source="end_time" />
            <TextInput source="compig" />
        </SimpleForm>
    </Edit>
);
