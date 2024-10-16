import React from 'react';
import data from '../utils/data.json'

// const MAX_TITLE_LENGTH = 50;

class ToDoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: data,
        }
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
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default ToDoApp;