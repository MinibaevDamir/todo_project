import styles from "./AuthorizationPage.module.css"
import {Link} from "react-router-dom";
import {AuthorizationForm} from "./AuthorizationForm/AuthorizationForm";
import {SubmissionError} from "redux-form";

const AuthorizationPage = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.nickname, formData.password)
        if (!props.fetching && props.rejected) {
            throw new SubmissionError({
                _error: props.rejected
            })
        }
    }
    return (
        <div className={styles.login}>
            <AuthorizationForm onSubmit={onSubmit} fetching={props.fetching}/>
            <Link className={styles.accountText} to={"./signup"}>
                Don't have any account?
            </Link>
        </div>
    );

}
export default AuthorizationPage;