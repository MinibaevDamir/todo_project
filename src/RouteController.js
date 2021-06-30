import {Switch} from "react-router";
import TodoPageContainer from "./Containers/TodoPageContainer";
import SignUpContainer from "./Containers/SignUpContainer";
import AuthorizationPageContainer from "./Containers/AuthorizationPageContainer";
import React from 'react'
import {PrivateRoute} from "./Route/PrivateRoute";
import {GuestRoute} from "./Route/GuestRoute";


const RouteController = () => {
    return <Switch>
        <PrivateRoute path={"/todo"}>
            <TodoPageContainer/>
        </PrivateRoute>
        <GuestRoute exact path={"/"}>
            <AuthorizationPageContainer/>
        </GuestRoute>
        <GuestRoute exact path={"/signup"}>
            <SignUpContainer/>
        </GuestRoute>
    </Switch>
}

export default RouteController;