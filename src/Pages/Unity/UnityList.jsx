import * as React from "react";
import { useMediaQuery } from '@mui/material';
import {
    Datagrid, DateField, List, NumberField, TextField, UrlField, SimpleList,
    useRecordContext,
} from 'react-admin';
import CompanyField from "../../components/Fields/CompanyField";
import UnityField from "../../components/Fields/UnityField";
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
                    secondaryText={element => (<CompanyField label="Company" source="company" />)}
                />

            ) : (
                <Datagrid rowClick="edit">
                    <TextField source="user.username" />
                    <CompanyField source="company" />
                    <NumberField source="pigs_counted" />
                    <NumberField source="deviations" />
                    <NumberField source="dead_pigs" />
                    <NumberField source="number_of_loadings" />
                    <DateField source="created" />
                    <DateField source="modified" />
                    <TextField source="postal_code" />
                </Datagrid>
            )}

        </List>
    );
};
