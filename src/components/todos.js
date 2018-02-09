// ./react-redux-client/src/components/Todos.js
import React from 'react';
import { Alert, Glyphicon, Button } from 'react-bootstrap';
import ReactModal from 'react-modal';
import { Link } from 'react-router';
import TodoEditForm from './todoEditForm';
import TodoForm from './todoForm';

export default class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.hideEditModal = this.hideEditModal.bind(this);
    this.submitEditTodo = this.submitEditTodo.bind(this);
    this.handleShowTodoModal = this.handleShowTodoModal.bind(this);
    this.showEditModal = this.showEditModal.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.submitEditTodo = this.submitEditTodo.bind(this);
  }
  componentWillMount() {
    this.props.fetchTodos();
  }

  showEditModal(todoToEdit) {
    this.props.mappedShowEditModal(todoToEdit);
  }

  handleShowTodoModal(e, todo) {
    console.log("Step1")
    this.props.mappedShowModalTodo(todo);
  }

  handleDeleteTodo(e, todoId) {

    this.props.mappedDeleteTodo(todoId);
  }

  hideEditModal() {
    this.props.mappedhideEditModal();
  }
  submitEditTodo(e) {
    e.preventDefault();
    const form = document.getElementById('EditTodoForm');
    if (form.todoText.value !== "") {
        const data = {
        'id': form.id.value,
        'fullName': form.fullName.value,
        'todoText': form.todoText.value}
        this.props.mappedEditTodo(data);
    }
    else {
      return;
    }
  }

  showDeleteModal(todoToDelete) {
    //this.props.mappedshowDeleteModal(todoToDelete);
  }

addTodo(e){
    e.preventDefault();
    const form = document.getElementById('addTodoForm');
    console.log("value:"+form.todoText.value);
    if (form.todoText.value !== "") {
      const data = {
      'fullName': form.fullName.value,
      'todoText': form.todoText.value}
      this.props.mappedSaveTodo(data);
    }
    else {
      return;
    }
}

  render() {
    const todoState = this.props.mappedTodoState;
    const todos = todoState.todos;
    return (
      <div className="col-md-12">
        <h3 className="centerAlign">Todos</h3>
        Datos de todos :{todos && todos.length > 0 && !todoState.isFetching}
        {!todos && todoState.isFetching &&
          <p>Loading todos....</p>
        }
        {todos.length <= 0 && !todoState.isFetching &&
          <p>No Todos Available. Add A Todo to List here.</p>
        }
        {todos && todos.length > 0 && !todoState.isFetching &&
          <table className="table booksTable">
            <thead>
              <tr><th>ID</th><th>Nombre</th><th>Valor</th><th className="textCenter">Edit</th><th className="textCenter">Delete</th><th className="textCenter">View</th></tr>
            </thead>
            <tbody>
              {todos.map((todo, i) => <tr key={i}>
                <td>{todo.id}</td>
                <td>{todo.fullName}</td>
                <td>{todo.todoText}</td>
                <td className="textCenter"><Button onClick={() => this.showEditModal(todo)} bsStyle="info" bsSize="xsmall"><Glyphicon glyph="pencil" /></Button></td>
                <td className="textCenter"><Button onClick={(e) => this.handleDeleteTodo(e, todo._id)} bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="trash" /></Button></td>
                <td className="textCenter"><Link to={`/${todo._id}`}>View Details</Link> </td>
              </tr>)
              }
            </tbody>
          </table>

        }

        <ReactModal
          isOpen={todoState.showViewModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={true}
          ariaHideApp={false}
        >
          <TodoForm addTodo={this.addTodo}/>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
        <ReactModal
          isOpen={todoState.showEditModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleEditCloseModal}
          shouldCloseOnOverlayClick={true}
          ariaHideApp={false}>
          <TodoEditForm submitEditTodo={this.submitEditTodo} todoToEdit={todoState.todoToEdit}/>
          <button onClick={this.handleEditCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}