import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputTodo = ({ addTodo }) => {
    const [ todo, setTodo ] = useState('');

    const addHandler = () => {
        addTodo(todo);
        setTodo('');
    }

    return (
        <div className="row">
            <div className="col">
                <div className="input-group">
                    <input id="msg" type="text" className="form-control" name="msg" 
                        placeholder="할일을 여기에 입력!" value={todo}
                        onChange={ (e) => setTodo(e.target.value) } 
                        onKeyUp={(e)=> e.keyCode === 13 ? addHandler() : null } />
                    <span className="btn btn-primary input-group-addon" onClick={addHandler}>추가</span>
                </div>
            </div>
        </div>
    );
};

InputTodo.propTypes = {
    addTodo : PropTypes.func.isRequired
};

export default InputTodo;