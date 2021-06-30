import axios from "axios";
import {Service} from "axios-middleware";
import ApiMiddleware from "./Middleware/apiMiddleware";

const instance = axios.create({
    baseURL: 'http://localhost:8080/api/todo',
});
const serviceModule = new Service(instance)
serviceModule.register([new ApiMiddleware()])

export const todoAPI = {
    getTodos() {
        return instance.get(`/`)
    },
    deleteTodo(id) {
        return instance.delete(`/${id}`)
    },
    updateTodo(id, info) {
        return instance.patch(`/${id}`, {info})
    },
    createTodo(title) {
        return instance.post(`/`, {title: title})
    },
    filterTodos(title, status) {
        return instance.get(`/get/${title}&${+status}`)
    }
}