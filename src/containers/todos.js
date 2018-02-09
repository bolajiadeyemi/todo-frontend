// ./react-redux-client/src/containers/Todos.js
import { connect } from 'react-redux';
import * as todoActions from '../actions/todoActions';
import Todos from '../components/todos';
// map state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedTodoState: state.todoState
  }
}
// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    fetchTodos: () => dispatch(todoActions.fetchTodos()),
    mappedDeleteTodo: todoToDelete => dispatch(todoActions.deleteTodo(todoToDelete)),
    mappedEditTodo: todoToEdit => dispatch(todoActions.editTodo(todoToEdit)),
    mappedSaveTodo: newTodo => dispatch(todoActions.addNewTodo(newTodo)),
    mappedShowEditModal : todo=> dispatch(todoActions.showEditModalTodo(todo))
    //mappedShowModalTodo: todo=> {console.log("Step2"); return(dispatch(todoActions.showModalNewTodo(todo)))}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todos);