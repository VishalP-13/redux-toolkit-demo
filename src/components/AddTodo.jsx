import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../slices/todoSlice';
import './todo.css';

const AddTodo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === '') return;

        dispatch(addTodo(text));
        setText('');
    };

    return (
        <div className="todo-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add a new todo"
                    value={text}
                    onChange={handleChange}
                    className="todo-input"
                />
                <button type="submit" className="todo-button">Add Todo</button>
            </form>
        </div>
    );
};

export default AddTodo;
