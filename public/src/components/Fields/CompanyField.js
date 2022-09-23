import * as React from "react";
import { useRecordContext, useGetOne, Loading, Error } from 'react-admin';

const CompanyField = ({ source }) => {
    const record = useRecordContext();
    const { data, isLoading, error } = useGetOne('company', {id:record[source]});
    if (isLoading) { return <Loading />; }
    if (error) { return <Error/>; }
    return record ? (
        <span>
            {data.user.username}
        </span>
    ) : null;
}

export default CompanyField;

