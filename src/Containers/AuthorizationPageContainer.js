import {connect} from "react-redux";
import {login} from "../Actions/AuthAction";
import AuthorizationPage from "../Components/AuthorizationPage/AuthorizationPage";

let mapStateToProps = (state) => ({
    rejected: state.auth.rejected,
    fetching: state.auth.fetching,
    isAuthenticated: state.auth.isAuthenticated
});
const AuthorizationPageContainer = connect(mapStateToProps, {login})(AuthorizationPage)

export default AuthorizationPageContainer;