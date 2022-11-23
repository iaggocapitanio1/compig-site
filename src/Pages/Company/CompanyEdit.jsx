import * as React from "react";
import { Edit, SimpleForm, TextInput } from 'react-admin';
import Features from "../../components/Featues/Features";
export const CompanyEdit = () => (


    <div className="company">
        <Features/>
        <Edit>
            <SimpleForm>
                <TextInput source="cnpj" label="CNPJ" />
            </SimpleForm>
        </Edit>
        
    </div>



);