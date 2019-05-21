import React from 'react';
import App from './App';
import TodoActionCreator from '../redux/TodoActionCreator';
import TimeActionCreator from '../redux/TimeActionCreator';
import { useDispatch, useSelector } from 'react-redux'

const AppContainer = () => {
    const dispatch = useDispatch()

    var propsObject = {
        todolist : useSelector(state => state.todolist),
        currentTime : useSelector(state => state.currentTime),
        addTodo : (todo) => dispatch(TodoActionCreator.addTodo(todo)),
        deleteTodo : (no) => dispatch(TodoActionCreator.deleteTodo(no)),
        toggleDone : (no) => dispatch(TodoActionCreator.toggleDone(no)),
        changeTime : () => dispatch(TimeActionCreator.changeTime())
    }

    return (
        <App {...propsObject} />
    );
};

export default AppContainer;
