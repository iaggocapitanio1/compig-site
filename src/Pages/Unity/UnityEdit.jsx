import * as React from "react";

import { Grid, Box, Typography } from '@mui/material';
import { DateInput, Edit, NumberInput, SimpleForm, TextInput, useRecordContext, } from 'react-admin';

const UnityTitle = () => {
    const record = useRecordContext();
    return <span>Unity:  {record ? `${record.user.username}` : ''}</span>;
};

export const UnityEdit = () => (
    <Edit title={<UnityTitle />}>
        {/* <SimpleForm>
            <ReferenceInput label="Company" source="company" reference="company">
                <SelectInput optionText="user.username" />
            </ReferenceInput>
            <TextInput source="postal_code" />
        </SimpleForm> */}
         <SimpleForm>
            <Grid>
                
            </Grid>
            <TextInput source="id" />
            <NumberInput source="pigs_counted" />
            <NumberInput source="deviations" />
            <DateInput source="dead_pigs" />
            <NumberInput source="number_of_loadings" />
            <TextInput source="user.id" />
            <TextInput source="company" />
            <DateInput source="created" />
            <DateInput source="modified" />
            <TextInput source="postal_code" />
        </SimpleForm>
    </Edit>
);
