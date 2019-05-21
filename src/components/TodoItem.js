import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ no, todo, done, toggleDone, deleteTodo }) => {
    let itemClassName = "list-group-item";
    if (done) itemClassName +=" list-group-item-success";

    return (
        <li className={itemClassName}>
            <span className={done ? "todo-done pointer": "pointer"}
                onClick={()=> toggleDone(no)}>
                {todo}{ done ? "(완료)" : "" } 
            </span>
            <span className="pull-right badge pointer" 
                onClick={()=> deleteTodo(no)}>삭제</span>
        </li>
    );
};

TodoItem.propTypes = {
    no : PropTypes.number.isRequired,
    todo : PropTypes.string.isRequired,
    done : PropTypes.bool.isRequired,
    toggleDone : PropTypes.func.isRequired,
    deleteTodo : PropTypes.func.isRequired
};
const MemoizedTodoItem = React.memo(TodoItem)
export default MemoizedTodoItem;