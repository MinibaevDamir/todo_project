import {Modal} from "react-bootstrap";


export const DeleteModal = (props) => {
    return (
        <Modal show={props.remove}>
            <Modal.Header>
                <Modal.Title>Delete task #{props.id}</Modal.Title>
                <button  className="btn btn-group-lg" onClick={props.handleClose}>Exit</button>
            </Modal.Header>
            <Modal.Body>
                Are you sure want to delete?
            </Modal.Body>
            <Modal.Footer>
                <button  className="btn" onClick={() => {props.handleSubmit(props.id)}}>Yes</button>
                <button  className="btn" onClick={props.handleClose}>No</button>
            </Modal.Footer>
        </Modal>

    )
}