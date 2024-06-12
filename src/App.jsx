import { useSelector } from 'react-redux'
import './App.css'
import AddTodo from './components/AddTodo'
import ToDoList from './components/ToDoList'

function App() {
  const { todos } = useSelector(state => state.todos)

  return (
    <>
      <h1>Hello</h1>
      <AddTodo />
      {todos.length > 0 && <ToDoList />}
    </>
  )
}

export default App
