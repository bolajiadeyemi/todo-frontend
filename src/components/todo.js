// ./react-redux-client/src/components/Todos.js
import React from 'react';
import { Alert, Glyphicon, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router';
export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props);
    this.props.mappedfetchTodoById(this.props.params.id);
  }

  render() {
    const todoState = this.props.mappedTodoState;
    const todos = todoState.todos;
    console.log(todos);
    return (
      <div className="todoDetail">
        <h2>Todo Detail</h2>
        {!todoState.todo && todoState.isFetching &&
          <div>
            <p>Loading todo....</p>
          </div>
        }
        {todoState.todo && !todoState.isFetching &&
          <div>
            <div><label>Full Name:</label>{todoState.todo.fullName}</div>
            <div><label>Description:</label>{todoState.todo.todoText}</div>
          </div>
        }
      </div>
    );
  }
}