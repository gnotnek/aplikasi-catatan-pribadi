import React from "react";
import TodoItem from "./TodoItem.jsx";

function TodoList({todos, onDelete, onUpdate}) {
    return (
        <div className="todo-list">
            {
                todos.map((todos) => (
                    <TodoItem
                        key={todos.id}
                        onDelete={onDelete}
                        onUpdate={onUpdate}
                        {...todos}
                        />
                ))
            }
        </div>
    )
}

export default TodoList;