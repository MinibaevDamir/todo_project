import {TODO} from "../Constants/TodoConstants";
import {todoAPI} from "../API/todoAPI";

export function getTasks() {
    return async (dispatch) => {
        try {
            const response = await todoAPI.getTodos()
            if (response) {
                dispatch({type: TODO.GET_TASKS, tasks: response.data})
            }
        } catch (err) {
            dispatch({type: TODO.REJECTED, rejected: err.response.data.message})
        }
    }
}

export function filterTasks(title, status) {
    return async (dispatch) => {
        try {
            const response = await todoAPI.filterTodos(title, status)
            if (response) {
                dispatch({type: TODO.GET_TASKS, tasks: response.data})
            }
        } catch (err) {
            dispatch({type: TODO.REJECTED, rejected: err.response.data.message})
        }
    }

}

export function createTask(title) {
    return async (dispatch) => {
        try {
            const response = await todoAPI.createTodo(title)
            if (response) {
                dispatch({type: TODO.CREATED, newTask: response.data})
            }
        } catch (err) {
            dispatch({type: TODO.REJECTED, rejected: err})
        }
    }
}

export function deleteTask(id) {
    return async (dispatch) => {
        try {
            const response = await todoAPI.deleteTodo(id)
            if (response) {
                dispatch({type: TODO.DELETE_TASK, id: id})
            }
        } catch (err) {
            dispatch({type: TODO.REJECTED, rejected: err.response.data.message})
        }
    }
}

export function updateTask(id, body) {
    return async (dispatch) => {
        try {
            const response = await todoAPI.updateTodo(id, body)
            if (response) {
                if (body.status !== undefined)
                    dispatch({type: TODO.UPDATE_STATUS, id: id, status: body.status})
                if (body.title)
                    dispatch({type: TODO.UPDATE_TITLE, id: id, title: body.title})
            }
        } catch (err) {
            dispatch({type: TODO.REJECTED, rejected: err.response.data.message})
        }
    }
}