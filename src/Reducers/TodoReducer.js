import {TODO} from "../Constants/TodoConstants";


let initialState = {
    tasks: null,
    fetching: false
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO.GET_TASKS:
            return {
                ...state,
                tasks: action.tasks
            }
        case TODO.REJECTED:
            return {
                ...state,
                rejected: action.rejected
            }
        case TODO.UPDATE_STATUS:
            return {
                ...state,
                tasks: state.tasks.map((task) => task.id === action.id ? {
                    ...task, status: action.status} : task)
            }
        case TODO.UPDATE_TITLE:
            return  {
                ...state,
                tasks: state.tasks.map((task) => task.id === action.id ? {
            ...task, title: action.title} : task)
            }
        case TODO.DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.id)
            }
        case TODO.CREATED:
            return {
                ...state,
                tasks: [...state.tasks, action.newTask]
            }
        case TODO.FETCHING:
            return {
                ...state,
                fetching: action.fetching
            }
        default:
            return state;
    }
}
