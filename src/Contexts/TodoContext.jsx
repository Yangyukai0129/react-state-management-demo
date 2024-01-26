import { createContext, useReducer } from "react";
import TodoReducer, { ACTIONS, initialState } from "../Reducers/TodoReducer";

export const TodoContext = createContext(initialState);

export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TodoReducer, initialState);

    const addTodo = (todoContent) => {
        const todo = todoObj(todoContent);
        const newTodo = state.todos.concat(todo)

        dispatch({
            type: ACTIONS.ADD_TODO,
            payload: {
                todo: newTodo,
            }
        })
    }

    const toggleTodo = (todoId) => {
        const newTodo = state.todos.map((todo) => {
            if (todo.id === todoId) {
                return { ...todo, complete: !todo.complete }
            }
            return todo
        })

        dispatch({
            type: ACTIONS.TOGGLE_TODO,
            payload: {
                todo: newTodo,
            }
        })
    }

    const deleteTodo = (todoId) => {
        const newTodo = state.todos.filter((todo) => {
            if (todo.id !== todoId) {
                return { ...todo }
            }
        })

        dispatch({
            type: ACTIONS.DELETE_TODO,
            payload: {
                todo: newTodo
            }
        })
    }

    const value = {
        todos: state.todos,
        addTodo,
        toggleTodo,
        deleteTodo,
    }

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
};

const todoObj = (todoContent) => {
    return {
        id: Math.floor(Math.random() * 100000),
        todoContent: todoContent,
        complete: false
    }
}