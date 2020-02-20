import React, { useCallback } from "react";
import App from "./App";
import TodoActionCreator from "../redux/TodoActionCreator";
import { useDispatch, useSelector } from "react-redux";

const AppContainer = () => {
  const dispatch = useDispatch();

  var propsObject = {
    todolist: useSelector(state => state.todolist),
    addTodo: useCallback(todo => dispatch(TodoActionCreator.addTodo(todo)), [dispatch]),
    deleteTodo: useCallback(no => dispatch(TodoActionCreator.deleteTodo(no)), [dispatch]),
    toggleDone: useCallback(no => dispatch(TodoActionCreator.toggleDone(no)), [dispatch])
  };

  return <App {...propsObject} />;
};

export default AppContainer;
