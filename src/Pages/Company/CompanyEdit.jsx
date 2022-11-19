import * as React from "react";
import { Edit, SimpleForm, TextInput} from 'react-admin';

export const CompanyEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="cnpj" label="CNPJ"/>
        </SimpleForm>
    </Edit>
);