import {Field, reduxForm} from "redux-form";
import React from 'react';

const AuthorizationFormWRF = (props) => {
    const {error} = props;
    return (
        <form onSubmit={props.handleSubmit}>
            <h4>Login</h4>
            <div className="input-group">
                <div>
                    <Field placeholder={"Nickname"} name={"nickname"} component="input"
                           className={error ? "form-control is-invalid" : "form-control"}/>

                    <Field placeholder={"Password"} name={"password"} component="input" type="password"
                           className={error ? "form-control is-invalid" : "form-control"}/>
                    <div className={error ? "invalid-tooltip" : "hidden"}>
                        {error}
                    </div>
                </div>
                <button type="submit" className="btn btn-group-lg" disabled={props.fetching}>Submit</button>
            </div>
        </form>

    )
}

export const AuthorizationForm = reduxForm({form: 'login'})(AuthorizationFormWRF)