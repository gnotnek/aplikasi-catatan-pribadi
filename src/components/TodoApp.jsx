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

        this.onAddTodoHandler = this.onAddTodoHandler.bind(this);
        this.onDeleteTodoHandler = this.onDeleteTodoHandler.bind(this);
        this.onUpdateTodoHandler = this.onUpdateTodoHandler.bind(this);
    }

    onAddTodoHandler({title, body, archived}) {
        this.setState((prevState) => {
            return {
                todos: [
                    ...prevState.todos,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived,
                        createdAt: new Date(),
                    }
                ]
            }
        });
    }

    onDeleteTodoHandler(id) {
        const todos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({ todos });
    }

    onUpdateTodoHandler(id) {
        const todos = this.state.todos.map(todo => {
            if (todo.id === id) {
            return {
                ...todo,
                archived: !todo.archived,
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
                <TodoInput addTodo={this.onAddTodoHandler} />
                <h2>Daftar To Do</h2>
                <TodoList todos={this.state.todos.filter(todo => !todo.archived)} onDelete={this.onDeleteTodoHandler} onUpdate={this.onUpdateTodoHandler} />
                <h2>Daftar Archived</h2>
                <TodoList todos={this.state.todos.filter(todo => todo.archived)} onDelete={this.onDeleteTodoHandler} onUpdate={this.onUpdateTodoHandler} />
            </div>
        );
    }
}

export default ToDoApp;