import React from "react";

const WarningList = ({warningList}) => {
    return (
        <ul>
            {warningList.map(({id, message}) => <li key={id}>{message}</li>)}
        </ul>
    );
};

export default WarningList;
