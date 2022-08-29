import * as React from "react";
import { useRecordContext, useGetOne, Loading, Error } from 'react-admin';

const UnityField = ({ source }) => {
    const record = useRecordContext();
    const { data, isLoading, error } = useGetOne('unity', {id:record[source]});
    if (isLoading) { return <Loading />; }
    if (error) { return <Error/>; }
    return record ? (
        <span>
            {data.user.username}
        </span>
    ) : null;
}

export default UnityField;