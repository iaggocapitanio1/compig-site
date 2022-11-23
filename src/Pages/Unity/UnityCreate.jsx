import * as React from "react";
import {
    SimpleForm,
    ReferenceInput,
    Create,
    PasswordInput,
    SelectInput,
    useRecordContext,
    TextInput
} from 'react-admin';

export const UnityCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Company" source="company_id" reference="company">
                <SelectInput optionText="user.username" />
            </ReferenceInput>
            <TextInput source="user.username" label="Username" />
            <TextInput source="user.first_name" label="First Name" />
            <TextInput source="user.email" label='E-Mail'/>
            <PasswordInput source="user.password" />
            <TextInput source="postal_code" label="CEP" />
        </SimpleForm>
    </Create>
);