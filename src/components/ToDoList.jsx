import { useDispatch, useSelector } from "react-redux"
import { fetchAmountById, removeAllTodos, removeTodo } from "../slices/todoSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const ToDoList = () => {
    const dispatch = useDispatch();
    
    const { todos } = useSelector(state => state.todos)

    return (
        <div className="todo-container">
            <div className="todo-header-container">
            <h2 className="todo-header">Todo List</h2>
            <button onClick={() => dispatch(removeAllTodos())} className="todo-remove-all">Remove All</button>
            <button onClick={() => dispatch(fetchAmountById(1))}>Change Text</button>
            </div>
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className="todo-item">
                        {todo.text}
                        <button onClick={() => dispatch(removeTodo(todo.id))} className="todo-remove-button">
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList