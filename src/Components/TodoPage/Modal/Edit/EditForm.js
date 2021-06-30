import {Field, getFormValues, reduxForm} from "redux-form";
import {Modal} from "react-bootstrap";
import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";


const EditFormWRF = (props) => {
    const handleSubmit = (e) => {
        e.persist()
        const newData = Object.entries(props.actionValues).reduce((acc, [k, v]) => {
            if (v !== props.initialValues[k]) {
                acc[k] = v
            }
            return acc
        }, {})
        props.handleSubmit(e);
        if (Object.keys(newData).length !== 0) {
            props.updateTask(props.id, newData)
        }
    }
    return (
        <Modal show={props.edit}>
            <Modal.Header>
                <Modal.Title>Edit task #{props.id}</Modal.Title>
                <button className="btn btn-group-lg" onClick={props.handleClose}>Exit</button>
            </Modal.Header>
            <form onSubmit={handleSubmit}>
                <Modal.Body>
                    <div className="input-group">
                        <Field placeholder={"Enter new title of task"} name={"title"} component="Input"
                               className="form-control"/>
                    </div>
                    <hr/>
                    <div className="input-group">
                        <span className="input-group-text">
                            Change status
                        </span>
                        <span className="input-group-text">
                          <Field name={"status"} component="input" type="checkbox"/>
                        </span>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="submit" className="btn btn-group-lg">Edit</button>
                </Modal.Footer>
            </form>
        </Modal>
    )
}


const mapStateToProps = state => ({
    actionValues: getFormValues('edit')(state)
})
export const EditForm = compose(
    reduxForm({form: 'edit', enableReinitialize: true}),
    connect(mapStateToProps)
)(EditFormWRF)
