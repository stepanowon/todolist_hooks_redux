import React from 'react';
import App from './App';
import TodoActionCreator from '../redux/TodoActionCreator';
import { useDispatch, useSelector } from 'react-redux'

const AppContainer = () => {
    const dispatch = useDispatch()

    var propsObject = {
        todolist : useSelector(state => state.todolist),
        addTodo : (todo) => dispatch(TodoActionCreator.addTodo(todo)),
        deleteTodo : (no) => dispatch(TodoActionCreator.deleteTodo(no)),
        toggleDone : (no) => dispatch(TodoActionCreator.toggleDone(no)),
    }

    return (
        <App {...propsObject} />
    );
};

export default AppContainer;
