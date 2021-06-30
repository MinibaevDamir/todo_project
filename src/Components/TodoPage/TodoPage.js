import styles from "./TodoPage.module.css";
import {CreateForm} from "./Modal/Create/CreateForm";
import React, {useEffect, useState} from "react";
import {reset, SubmissionError} from "redux-form";
import {SearchForm} from "./Forms/SearchForm/SearchForm";
import {Navbar} from "./Navbar/Navbar";
import {DeleteModal} from "./Modal/Delete/DeleteModal";
import {EditForm} from "./Modal/Edit/EditForm";

const TodoPage = (props) => {
    const [create, setCreate] = useState(false);

    const [title, setTitle] = useState(null);

    const [remove, setRemove] = useState(false);

    const [edit, setEdit] = useState(false);

    const [id, setId] = useState(null);

    const [status, setStatus] = useState(false);

    useEffect(() => {
        props.getTasks()
    }, [])

    const createHandlers = {
        handleClose() {
            setCreate(false)
        },
        handleShow() {
            setCreate(true)
        },
        handleSubmit(dataForm, dispatch) {
            if (!dataForm.task) {
                throw new SubmissionError({
                    _error: "Title field is clear"
                })
            } else {
                props.createTask(dataForm.task)
                dispatch(reset('create'))
                createHandlers.handleClose()
            }
        }

    }

    let deleteHandlers = {
        handleClose() {
            setRemove(false)
        },
        handleShow(id) {
            setRemove(true)
            setId(id)
        }
    }

    const editHandlers = {
        handleClose() {
            setEdit(false)
        },
        handleShow(id, status, title) {
            setTitle(title)
            setEdit(true)
            setStatus(status)
            setId(id)
        },
        handleSubmit(dataForm, dispatch) {
             editHandlers.handleClose()
             dispatch(reset('edit'))
            }
    }

    const deleted = (id) => {
        props.deleteTask(id)
        deleteHandlers.handleClose()
    }

    return (
        <div>
            <Navbar logout={props.logout} handleShow={createHandlers.handleShow}/>
            <div className={styles.todo}>
                <div className={styles.forms}>
                    <SearchForm filterTasks={props.filterTasks} getTasks={props.getTasks} fetching={props.fetching}/>
                    <CreateForm create={create} onSubmit={createHandlers.handleSubmit}
                                handleClose={createHandlers.handleClose}/>
                    <DeleteModal remove={remove} handleClose={deleteHandlers.handleClose} handleSubmit={deleted}
                                 id={id}/>
                    <EditForm edit={edit} onSubmit={editHandlers.handleSubmit} handleClose={editHandlers.handleClose}
                               id={id} initialValues={{status: status, title: title}} updateTask = {props.updateTask}/>
                </div>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Status</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    {props.tasks ? props.tasks.map(task =>
                        <tbody>
                        <tr className={styles.table}>
                            <td>{task.id}</td>
                            <td>{task.title}</td>
                            <td className={styles.status}>
                                {task.status ?
                                    <i className="bi bi-check2"></i>
                                    :
                                    <i className="bi bi-x-circle-fill"></i>}
                            </td>
                            <td>
                                <button className="btn" onClick={() => {
                                    deleteHandlers.handleShow(task.id)
                                }}>
                                    <i className="bi bi-trash-fill"></i>
                                </button>
                            </td>
                            <td>
                                <button className="btn" onClick={() => {
                                    editHandlers.handleShow(task.id, task.status, task.title)
                                }}>
                                    Edit
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    ) : <></>}
                </table>
            </div>
        </div>
    );
}
export default TodoPage;