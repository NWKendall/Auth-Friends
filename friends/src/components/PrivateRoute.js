import React from "react";
import { Route, Redirect } from "react-router-dom";

// Requirements:
// 1. has to have same API as <Route /> (same props as Route)
// 2. render <Route /> and pass all props through it
// 3. checls if user is authenticated, if they are, renders 
//    component props, if not, redirects user to /login

// DONT HAVE BOTH RENDER AND COMPONENT AS PROPS, ONE OR THE OTHER

const PrivateRoute = ({ component: Component, ...rest }) => {

  return (
    <Route 
    {...rest} 
    render={props => {
      if(localStorage.getItem("token")) {
        // push to component prop
        return <Component {...props}/>
        } else {
          // redirects to login
          return <Redirect to="/login" />
        }
      }} 
    />
  );
};

export default PrivateRoute