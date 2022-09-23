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
    TextInput
} from 'react-admin';
import UnityField from "./Fields/UnityField";

const TruckTitle = () => {
    const record = useRecordContext();
    return <span>Truck:  {record ? `${record.license_plate}` : ''}</span>;
};
export const TruckList = () => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={ele => ele.license_plate}
                    secondaryText={element => (<UnityField label="Unity" source="unity_id" />)}
                />

            ) : (<Datagrid rowClick="edit">
                <UnityField source="unity_id" />
                <TextField source="license_plate" />
            </Datagrid>
            )}

        </List>)
};

export const TruckEdit = () => (
    <Edit title={<TruckTitle />}>
        <SimpleForm>
            <ReferenceInput label="Unity" source="unity_id" reference="unity">
                <SelectInput optionText="user.username" />
            </ReferenceInput>
            <TextInput source="license_plate" />
        </SimpleForm>
    </Edit>
);

export const TruckCreate = props => (
    <Create {...props}>
        <SimpleForm>
        <ReferenceInput label="Unity" source="unity_id" reference="unity">
            <SelectInput optionText="user.username" />
        </ReferenceInput>
            <TextInput multiline source="license_plate" />
        </SimpleForm>
    </Create>
);