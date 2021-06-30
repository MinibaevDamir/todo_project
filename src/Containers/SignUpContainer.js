import {connect} from "react-redux";
import {signUp} from "../Actions/AuthAction";
import SignUp from "../Components/SignUpPage/SignUp";

let mapStateToProps = (state) => ({
    rejected: state.auth.rejected,
    fetching: state.auth.fetching
});
const SignUpContainer = connect(mapStateToProps, {signUp})(SignUp)

export default SignUpContainer;