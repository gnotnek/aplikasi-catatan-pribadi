import React from 'react';
import data from '../utils/data.json'

// const MAX_TITLE_LENGTH = 50;

class ToDoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: data,
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onUpdateHandler = this.onUpdateHandler.bind(this);
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
            <div className="w-full max-w-3xl mx-auto">
                <header>
                    <h1 className="text-2xl font-bold text-center">To Do App</h1>
                </header>
                <main>
                    <div className='space-y-4 mb-4'>
                        <div className='flex items-center space-x-2'>
                            <input 
                                type="text" 
                                placeholder="Task title"
                                // value={newTaskTitle}
                                // onChange={(e) => setNewTaskTitle(e.target.value.slice(0, MAX_TITLE_LENGTH))}
                                // maxLength={MAX_TITLE_LENGTH}
                            />
                            <span className='text-sm text-gray-500'>
                                {/* {MAX_TITLE_LENGTH - newTaskTitle.length} characters left */}
                            </span>
                        </div>
                        <textarea 
                            placeholder="Task description"
                            // value={newTaskBody}
                            // onChange={(e) => setNewTaskBody(e.target.value)}
                        />
                        <button 
                            // onClick={addTask} 
                            className="w-full">
                                Add Task
                        </button>
                    </div>
                    <ul className='space-y-4'>
                        {/* {tasks.map(task => (
                            <Task 
                                key={task.id} 
                                task={task} 
                                onDelete={deleteTask} 
                                onUpdate={updateTask} 
                            />
                        ))} */}
                    </ul>
                </main>
            </div>
        );
    }
}

export default ToDoApp;