// ./react-redux-client/src/components/TodoEditForm.js
import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';
const TodoEditForm = (props) => {
  console.log(props);
  return (
    <form className="form form-horizontal" id="EditTodoForm" onSubmit={props.submitEditTodo}>
    <div className="row">
    <div className="col-md-12">
    <FormGroup>
          <ControlLabel>Todo: </ControlLabel>
          <input type="hidden" value={props.todoToEdit._id} name="id"/>
            <FormControl
              type="text" placeholder="Enter todo"
              name="fullName" defaultValue={props.todoToEdit.fullName}
               />
        </FormGroup>
        </div>
        <div className="col-md-12">
        <FormGroup>
              <ControlLabel>Description: </ControlLabel>
                <FormControl
                  componentClass="textarea" placeholder="Enter description"
                  name="todoText" defaultValue={props.todoToEdit.todoText}
                   />
            </FormGroup>
            </div>
          </div>
          <FormGroup>
              <Button type="submit" bsStyle="success" bsSize="large" block>Submit</Button>
          </FormGroup>
    </form>
  );
}
export default TodoEditForm;