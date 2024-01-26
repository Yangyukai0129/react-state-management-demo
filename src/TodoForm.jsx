import React, { useContext, useState } from 'react'
import { TodoContext } from './Contexts/TodoContext'

const TodoForm = () => {
    const { addTodo } = useContext(TodoContext);
    const [todoContent, setTodoContent] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todoContent);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={todoContent}
                onChange={(e) => {
                    setTodoContent(e.target.value)
                }}
                placeholder="Type in Somethig ..."
            />
        </form>
    )
}

export default TodoForm

