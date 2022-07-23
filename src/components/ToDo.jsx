import React, {useState} from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const todoItems = [
    {id: 1, task: 'Buy bread', status: false},
    {id: 2, task: 'Buy milk', status: false},
    {id: 3, task: 'Buy juice', status: false}
]

function ToDo() {
    const [todos, setTodos] = useState(todoItems);

    function deleteTodoItem(id) {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    }

    function changeStatus(id) {
        const todoIndex = todos.findIndex((todo) => todo.id === id);
        const newTodos = [...todos];
        newTodos[todoIndex].status = !newTodos[todoIndex].status;

        setTodos(newTodos);
    }

    function addTodo(todo) {
        const newTodos = [
            ...todos,
            {...todo, id: Math.floor(Math.random() * 100)}
        ];

        setTodos(newTodos);
    }

    return (
        <>
            <TodoForm onAddTodo={addTodo}/>
            <TodoList todos={todos} onChangeStatus={changeStatus} onDelete={deleteTodoItem}/>
        </>
    )
}

export default ToDo;