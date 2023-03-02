import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { handleData } from '../utils/Utils';

function PublicRoute({ component: Component, restricted = false, ...rest }) {
    console.log(handleData(), restricted)
    return (
        <Route
            {...rest}
            render={(props) => {
                return (
                    handleData() && restricted ? <Redirect to="/" /> : <Component {...props} />
                )
            }
            }
        />
    );
}

export default PublicRoute;