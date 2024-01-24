import './App.css'
import { TodoProvider } from './Contexts/TodoContext'
import Todo from './Todo'
import TodoForm from './TodoForm'

function App() {


  return (
    <TodoProvider>
      <div>
        <TodoForm />
        <Todo />
      </div>
    </TodoProvider>
  )
}

export default App
