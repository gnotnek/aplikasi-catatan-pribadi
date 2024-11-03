import React from "react";

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
            title: '',
            body: '',
            archived: false,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onArchievedChangeEventHandler = this.onArchievedChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onArchievedChangeEventHandler(event) {
        this.setState(() => {
            return {
                archived: event.target.checked,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addTodo(this.state);
        this.setState(() => {
            return {
                title: '',
                body: '',
                archived: false,
            }
        });
    }

    render() {
        return (
            <form className='todo-input' onSubmit={this.onSubmitEventHandler}>
                <input type="text" placeholder="Title" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                <input type="text" placeholder="Body" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                <input type="checkbox" value={this.state.archived} />
                <button type="submit">Tambah</button>
            </form>
        )
    }
}

export default TodoInput;