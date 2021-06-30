import styles from "./TodoPage.module.css";
import {CreateForm} from "./Modal/Create/CreateForm";
import React, {useCallback, useEffect, useState} from "react";
import {reset, SubmissionError} from "redux-form";
import {SearchForm} from "./Forms/SearchForm/SearchForm";
import {Navbar} from "./Navbar/Navbar";
import {DeleteModal} from "./Modal/Delete/DeleteModal";
import {EditForm} from "./Modal/Edit/EditForm";

const TodoPage = (props) => {
    const [create, setCreate] = useState(false);
    const [edit, setEdit] = useState(false);
    const [remove, setRemove] = useState(false);


    const [id, setId] = useState(null);
    const [status, setStatus] = useState(false);
    const [title, setTitle] = useState(null);

    useEffect(() => {
        props.getTasks()
    }, [])
    const createClose = useCallback(() => {
        setCreate(false)
    }, [])
    const createShow = useCallback(() => {
        setCreate(true)
    },[])
    const createSubmit = useCallback((dataForm, dispatch) => {
        if (!dataForm.task) {
            throw new SubmissionError({
                _error: "Title field is clear"
            })
        } else {
            props.createTask(dataForm.task)
            dispatch(reset('create'))
            createClose()
        }
    }, [props])

    const deleteClose = useCallback(() => {
        setRemove(false)
    },[])
    const deleteShow = useCallback((id) => {
        setId(id)
        setRemove(true)
    },[])
    const deleteSubmit = useCallback((id) => {
        props.deleteTask(id)
        deleteClose()
    }, [props])

    const editClose = useCallback(() => {
        setEdit(false)
    },[])
    const editShow = useCallback((id, status, title) => {
        setEdit(true)
        setTitle(title)
        setStatus(status)
        setId(id)
    },[])
    const editSubmit = useCallback((dataForm, dispatch) => {
        editClose()
        dispatch(reset('edit'))
    },[props])



    return (
        <div>
            <Navbar logout={props.logout} handleShow={createShow}/>
            <div className={styles.todo}>
                <div className={styles.forms}>
                    <SearchForm filterTasks={props.filterTasks} getTasks={props.getTasks} fetching={props.fetching}/>
                    <CreateForm create={create} onSubmit={createSubmit}
                                handleClose={createClose}/>
                    <DeleteModal remove={remove} handleClose={deleteClose} handleSubmit={deleteSubmit}
                                 id={id}/>
                    <EditForm edit={edit} onSubmit={editSubmit} handleClose={editClose}
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
                                    deleteShow(task.id)
                                }}>
                                    <i className="bi bi-trash-fill"></i>
                                </button>
                            </td>
                            <td>
                                <button className="btn" onClick={() => {
                                    editShow(task.id, task.status, task.title)
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