// import * as React from "react";
import { useMediaQuery } from '@mui/material';
import {
    List,
    Datagrid,
    TextField,
    SimpleList,
    NumberField
} from 'react-admin';
export const CompanyList = () => {
    const isSmall = useMediaQuery(theme => {
        console.log("theme")
        console.log(theme)
        return theme.breakpoints.down('sm');
    });

    return (
        <List>
       {isSmall? (
        <SimpleList
                    primaryText={ele => ele.user.username}
                    secondaryText={element => (element.cnpj)}
                />
       ):(

        
        <Datagrid rowClick="edit"
        xs={12}
        sm={6}
        md={4}
        lg={3}
        >
            <TextField source="user.username" />
            <TextField source="cnpj" />
            <NumberField source="pigs_counted" />
            <NumberField source="deviations" />
            <NumberField source="dead_pigs" />
        </Datagrid>
    
       )}
       </List>
    )
};