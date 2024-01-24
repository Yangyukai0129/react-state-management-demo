import React, { useState } from 'react'

const TodoForm = () => {
    const [todoContent, setTodoContent] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
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

