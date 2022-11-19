import * as React from "react";
import { useMediaQuery } from '@mui/material';
import {
    List,
    Datagrid,
    TextField,
    SimpleList} from 'react-admin';

export const CompanyList = () => {

    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

    return (
    
    <List>
        {isSmall ? (
                <SimpleList
                    primaryText={ele => ele.user.username}
                    secondaryText={element => (element.cnpj)}
                />

            ) : (
                <Datagrid rowClick="edit">
                <TextField source="user.username" />
                <TextField source="cnpj" />
                </Datagrid>
            )}
        
    </List>
)
};
