import React, { Component } from 'react';
import { Redirect, Route} from 'react-router-dom';
import { handleData } from '../utils/Utils';

function PrivateRoute({ component: Component, restricted = false, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => {
                return (
                    handleData() ?  <Component  {...props}/> : <Redirect  to = "/login"/>
                )
            }
            }
        />


    );
}

export default PrivateRoute;