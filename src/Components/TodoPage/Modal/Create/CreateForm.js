import {Field, reduxForm} from "redux-form";
import {Modal} from "react-bootstrap";
import React from "react";


const CreateFormWRF = (props) => {

    const {error} = props;
    return (
        <Modal show={props.create}>
            <Modal.Header>
                <Modal.Title>Create new Task</Modal.Title>
                <button  className="btn btn-group-lg" onClick={props.handleClose}>Exit</button>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={props.handleSubmit}>
                    <div className="input-group">
                        <Field placeholder={"Enter new task in To-Do list"} name={"task"} component="input"
                               className={error ? "form-control is-invalid" : "form-control"}/>
                        <div className={error ? "invalid-tooltip" : "hidden"}>
                            {error}
                        </div>
                        <button type="submit" className="btn btn-group-lg">Create</button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>

    )
}

export const CreateForm = reduxForm({form: 'create'})(CreateFormWRF)