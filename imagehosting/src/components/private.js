import React from "react";
import { Route, Redirect } from 'react-router-dom';
 

const Private = ({ component: Component, auth, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("auth") ? (
          <Component {...props} auth={auth} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );

  export default Private;