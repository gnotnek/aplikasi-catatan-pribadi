import React from "react";

function TodoItemBody({title, body, archived}) {
    return (
        <div className="todo-item-body">
            <h3 className="todo-item-title">{title}</h3>
            <p className="todo-item-body">{body}</p>
            <p className="todo-item-archieved">{archived}</p>
        </div>
    )
}

export default TodoItemBody;