import {createTask, deleteTask, filterTasks, getTasks, updateTask} from "../Actions/TodoAction";
import {connect} from "react-redux";
import TodoPage from "../Components/TodoPage/TodoPage";
import {logout} from "../Actions/AuthAction";


let mapStateToProps = (state) => ({
    tasks: state.todo.tasks,
    rejected: state.todo.rejected,
    fetching: state.todo.fetching,

});

const TodoPageContainer = connect(mapStateToProps, {getTasks, createTask, deleteTask, updateTask, filterTasks, logout})(TodoPage)

export default TodoPageContainer;