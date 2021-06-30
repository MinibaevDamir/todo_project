import {Redirect, Route} from "react-router";
import {useSelector} from "react-redux";

export const PrivateRoute = ({children, ...rest}) => {
    const isAuthenticated = useSelector((store) => ({
        isAuth: store.auth.isAuthenticated
    }))
    return (
        <Route
            {...rest}
            render={({ location }) => (
                isAuthenticated.isAuth ? children
                     : (
                        <Redirect to={{
                            pathname: "./",
                            state: {from: location}}}/>
                        )
                    )
                }
        />
    )
        ;
}
