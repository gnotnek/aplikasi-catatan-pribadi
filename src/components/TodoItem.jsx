import React from "react";
import TodoItemBody from "./TodoItemBody";
import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";

function TodoItem({title, body, archieved, id, onDelete, onUpdate}) {
    return (
        <div className="todo-item">
            <TodoItemBody title={title} body={body} archieved={archieved} />
            <DeleteButton id={id} onDelete={onDelete} />
            <UpdateButton id={id} onUpdate={onUpdate} />
        </div>
    )
}

export default TodoItem;