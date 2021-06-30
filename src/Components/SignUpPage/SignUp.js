import styles from "./SignUp.module.css"
import {SignUpForm} from "./SignUpForm/SignUpForm";
import {SubmissionError} from "redux-form";
import {useHistory} from "react-router";

const SignUp = (props) => {
    const history = useHistory()
    const onSubmit = (dataForm) => {
        if (dataForm.confirmed !== dataForm.password) {
            throw new SubmissionError({
                _error: "Passwords don't match"
            })
        } else {
            try {
                props.signUp(dataForm.nickname, dataForm.password, dataForm.email)
            } catch (e) {
            }
            if (!props.fetching && props.rejected) {
                throw new SubmissionError({
                    _error: props.rejected
                })
            } else if (!props.rejected) {
                history.push('./')
            }
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