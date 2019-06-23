import React from 'react';
import InputTodo from './InputTodo';
import TodoList from './TodoList';
import PropTypes from 'prop-types';

const App = ({todolist, addTodo, deleteTodo, toggleDone }) => {
    return (
        <div className="container">
            <div className="well">
                <div className="title">:: Todolist App</div>
            </div>
            <div className="panel panel-default panel-borderless">
                <div className="panel-body">
                    <InputTodo addTodo={addTodo} />
                    <TodoList todolist={todolist} 
                        toggleDone={toggleDone} deleteTodo={deleteTodo}/>
                </div>
            </div>
        </div>
    );
};

App.propTypes = {
    todolist : PropTypes.arrayOf(PropTypes.object),
    addTodo : PropTypes.func.isRequired,
    deleteTodo : PropTypes.func.isRequired,
    toggleDone : PropTypes.func.isRequired,
}

const MemoizedApp = React.memo(App)
export default MemoizedApp;