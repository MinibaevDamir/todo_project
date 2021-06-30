import styles from "./SignUp.module.css"
import {SignUpForm} from "./SignUpForm/SignUpForm";
import {SubmissionError} from "redux-form";

const SignUp = (props) => {
    const onSubmit = (dataForm) => {
        if (dataForm.confirmed !== dataForm.password) {
            throw new SubmissionError({
                _error: "Passwords don't match"})}
        else {
            try {
                props.signUp(dataForm.nickname, dataForm.password, dataForm.email)}
            catch (e) {
                if (!props.fetching && props.rejected) {
                    throw new SubmissionError({
                        _error: props.rejected
                    })}}
        }
    }

    return (
        <div>
            <div className={styles.signup}>
                <h4>Sign Up</h4>
                <SignUpForm onSubmit={onSubmit} fetching={props.fetching}/>
            </div>
        </div>
    );
}
export default SignUp;