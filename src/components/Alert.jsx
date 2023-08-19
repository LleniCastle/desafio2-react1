
import React from "react";


const Alert = ({ message, success }) => {
    const alertClass = success ? "alert alert-success" : "alert alert-danger";

    return <div className={alertClass}>{message}</div>;
};


export default Alert;