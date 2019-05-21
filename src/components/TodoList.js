import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ todolist, toggleDone, deleteTodo }) => {
    let todoItems = todolist.map((item)=> {
        return (
            <TodoItem key={item.no} {...item} deleteTodo={deleteTodo} 
                toggleDone={toggleDone} />
        )
    })
    console.log("### TodoList Rendered!!")
    return (
        <div className="row">
            <ul className="list-group">
                {todoItems}
            </ul>
        </div>

    );
};

TodoList.propTypes = {
    todolist : PropTypes.arrayOf(PropTypes.object),
    toggleDone : PropTypes.func.isRequired,
    deleteTodo : PropTypes.func.isRequired
}

const MemoizedTodoList = React.memo(TodoList)
export default MemoizedTodoList;