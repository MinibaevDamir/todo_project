import axios from "axios";
const instance = axios.create({
    baseURL: 'http://localhost:8080/api',

});
export const usersAPI = {
    signup(nickname, password, email) {
        return instance.post("/user/signup", {nickname, password, email})
    },
    login(nickname, password) {
        return instance.post("/user/login", {nickname, password})
    }
}