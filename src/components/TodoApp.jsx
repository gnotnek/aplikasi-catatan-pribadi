import React from 'react';
import data from '../utils/data.json'
import TodoInput from './TodoInput';
import TodoList from './TodoList';

// const MAX_TITLE_LENGTH = 50;

class ToDoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: data,
        }

        this.onAddHandler = this.onAddHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onUpdateHandler = this.onUpdateHandler.bind(this);
    }

    onAddHandler(todo) {
        this.setState((prevState) => {
            return {
                todos: [
                    ...prevState.todos,
                    {
                        id: +new Date(),
                        ...todo,
                    }
                ]
            }
        });
    }

    onDeleteHandler(id) {
        const todos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({ todos });
    }

    onUpdateHandler(id, updatedTodo) {
        const todos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    ...updatedTodo,
                }
            }
            return todo;
        });
        this.setState({ todos });
    }

    render() {
        return (
            <div>
                <h1>Aplikasi Catatan Pribadi</h1>
                <h2>Daftar Catatan</h2>
                <h2>Tambah To Do</h2>
                <TodoInput onAdd={this.onAddHandler} />
                <h2>Daftar To Do</h2>
                <TodoList todos={this.state.todos} onDelete={this.onDeleteHandler} onUpdate={this.onUpdateHandler} />
            </div>
        );
    }
}

export default ToDoApp;