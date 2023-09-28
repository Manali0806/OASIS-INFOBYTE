import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContextProvider";

const ProtectedRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useUserAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
