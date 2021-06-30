import {Field, reduxForm} from "redux-form";
import React from 'react';

const SignUpFormWRF = (props) => {
    const {error} = props;
    return (
        <form onSubmit={props.handleSubmit}>
            <div className= "input-group">
                <div>
                    <Field placeholder={"Nickname"} name={"nickname"} component="input"
                           className={error ? "form-control is-invalid" : "form-control"}/>
                    <Field placeholder={"E-mail"} name={"email"} component="input" className={error ? "form-control is-invalid" : "form-control"}/>
                    <Field placeholder={"Password"} name={"password"} component="input" type="password"
                           className={error ? "form-control is-invalid" : "form-control"}/>
                    <Field placeholder={"Confirm password"} name={"confirmed"} component="input" type="password"
                           className={error ? "form-control is-invalid" : "form-control"}/>
                    <div className={error ? "invalid-tooltip" : "hidden"}>
                        {error}
                    </div>
                </div>
                <button type="submit" className="btn btn-group-sm" disabled={props.fetching}>Sign up</button>
            </div>
        </form>
    )
}

export const SignUpForm = reduxForm({form: 'signup'})(SignUpFormWRF)