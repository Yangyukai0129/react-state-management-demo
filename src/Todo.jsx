import React from 'react'

const Todo = () => {
    return (
        <div className="todo">
            <span>
                Todo Content
            </span>
            <button
                className="toggle"
            >
                Complete
            </button>
            <button
                className="delete"
            >
                Delete
            </button>
        </div>
    )
}

export default Todo