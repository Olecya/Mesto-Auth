import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRouteElement = ({ element, ...props  }) => {

  return (
    props.loggedIn ? <>{element}</>  : <Navigate to="/sign-in" replace/>
)}

export default ProtectedRouteElement;