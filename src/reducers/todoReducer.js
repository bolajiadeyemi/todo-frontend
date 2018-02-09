// ./react-redux-client/src/reducers/todoReducer.js
const INITIAL_STATE = {
  todos: [],
  todo: null,
  isFetching: false,
  error: null,
  successMsg: null,
  showDeleteModal: false,
  showViewModal: false,
  todoToDelete: null,
  showEditModal: false,
  todoToEdit: null,
}
export const todoReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_TODOS_REQUEST':
      return {
        ...currentState,
        todos: [],
        todo: null,
        isFetching: true,
        error: null,
        successMsg: null,
        showDeleteModal: false,
        showViewModal: false,
        todoToDelete: null,
        showEditModal: false,
        todoToEdit: null,
      }
    case 'FETCH_TODOS_SUCCESS':
      return {
        ...currentState,
        todos: action.todos,
        todo: null,
        isFetching: false,
        error: null,
        successMsg: action.message,
        showDeleteModal: false,
        showViewModal: false,
        todoToDelete: null,
        showEditModal: false,
        todoToEdit: null,
      }
    case 'FETCH_TODOS_FAILED':
      return {
        ...currentState,
        todos: [],
        todo: null,
        isFetching: false,
        error: action.error,
        successMsg: null,
        showDeleteModal: false,
        showViewModal: false,
        todoToDelete: null,
        showEditModal: false,
        todoToEdit: null,
      }
    case 'FETCH_TODO_REQUEST':
      return {
        ...currentState,
        todos: currentState.todos,
        todo: null,
        isFetching: true,
        error: null,
        successMsg: null,
        showDeleteModal: false,
        showViewModal: false,
        todoToDelete: null,
        showEditModal: false,
        todoToEdit: null,
      }

    case 'FETCH_TODO_SUCCESS':
      return {
        ...currentState,
        todos: currentState.todos,
        todo: action.todo,
        isFetching: false,
        error: null,
        successMsg: action.message,
        showDeleteModal: false,
        showViewModal: false,
        todoToDelete: null,
        showEditModal: false,
        todoToEdit: null,
      }

    case 'FETCH_TODO_FAILED':
      return {
        ...currentState,
        todos: [],
        todo: null,
        isFetching: false,
        error: action.error,
        successMsg: null,
        showDeleteModal: false,
        showViewModal: false,
        todoToDelete: null,
        showEditModal: false,
        todoToEdit: null,
      }
    case 'DELETE_TODO_REQUEST':
      console.log("DELETE_TODO_REQUEST");
      console.log(action);
      const resp = {
        ...currentState,
        todos: currentState.todos,
        todo: null,
        isFetching: true,
        error: null,
        successMsg: null,
        showDeleteModal: true,
        showViewModal: false,
        todoToDelete: action.todo,
        showEditModal: false,
        todoToEdit: null,
        newTodo: null
      }
      return resp;
    case 'DELETE_TODO_SUCCESS':
      const filteredTodos = currentState.todos.filter((todo) => todo._id !== currentState.todoToDelete);
      return {
        ...currentState,
        todos: filteredTodos,
        todo: null,
        isFetching: false,
        error: null,
        successMsg: action.message,
        showDeleteModal: true,
        showViewModal: false,
        todoToDelete: null,
        showEditModal: false,
        todoToEdit: null,
        newTodo: null
      }
    case 'DELETE_TODO_FAILED':
      return {
        ...currentState,
        todos: currentState.todos,
        todo: null,
        isFetching: false,
        error: action.error,
        successMsg: null,
        showDeleteModal: true,
        showViewModal: false,
        todoToDelete: null,
        showEditModal: false,
        todoToEdit: null,
        newTodo: null
      }

      case 'EDIT_TODO_REQUEST':
      console.log('EDIT_TODO_REQUEST');
      return {
        ...currentState,
        todos: currentState.todos,
        todo: null,
        isFetching: true,
        error: null,
        successMsg: null,
        showDeleteModal: true,
        showViewModal: false,
        todoToDelete: null,
        showEditModal: false,
        todoToEdit: action.todo,
        newTodo: null
      }
      return resp;
    case 'EDIT_TODO_SUCCESS':
      const filteredTodosUpdated = currentState.todos.map((todo) => {
        if(todo._id !== action.todo._id){
          //This is not the item we care about, keep it as is
          return todo;
        }
        //Otherwise, this is the one we want to return an updated value
        return { ...todo, ...action.todo }
      }) 
      console.log("Test 0");
      console.log(filteredTodosUpdated);

      return {
        ...currentState,
        todos: filteredTodosUpdated,
        todo: null,
        isFetching: false,
        error: null,
        successMsg: action.message,
        showDeleteModal: true,
        showViewModal: false,
        todoToDelete: null,
        showEditModal: false,
        todoToEdit: null,
        newTodo: null
      }
    case 'EDIT_TODO_FAILED':
      return {
        ...currentState,
        todos: currentState.todos,
        todo: null,
        isFetching: false,
        error: action.error,
        successMsg: null,
        showDeleteModal: true,
        showViewModal: false,
        todoToDelete: null,
        showEditModal: true,
        todoToEdit: null,
        newTodo: null
      }
    
      case 'ADD_NEW_TODO_REQUEST':
      
      return {
        ...currentState,
        todos: currentState.todos,
        todo: null,
        isFetching: false,
        error: null,
        successMsg: null,
        showDeleteModal: false,
        showViewModal: false,
        todoToDelete: null,
        showEditModal: false,
        todoToEdit: null,
        newTodo: action.todo
      }
      case 'ADD_NEW_TODO_FAILED':
      
      return {
        ...currentState,
        todos: currentState.todos,
        todo: null,
        isFetching: false,
        error: action.error,
        successMsg: null,
        showDeleteModal: false,
        showViewModal: true,
        todoToDelete: null,
        showEditModal: false,
        todoToEdit: null,
        newTodo: action.todo
      }
      case 'ADD_NEW_TODO_SUCESS':
      console.log([...currentState.todos, action.todo]);
      return {
        ...currentState,
        todos: [...currentState.todos, action.todo],
        todo: null,
        isFetching: false,
        error: null,
        successMsg: action.message,
        showDeleteModal: false,
        showViewModal: false,
        todoToDelete: null,
        showEditModal: false,
        todoToEdit: null,
        newTodo: action.todo
      }
      case 'SHOW_MODAL_SUCCESS':
       
      return {
        ...currentState,
        todos: currentState.Todos,
        todo: null,
        isFetching: false,
        error: null,
        successMsg: null,
        showDeleteModal: false,
        showViewModal: true,
        todoToDelete: null,
        showEditModal: false,
        todoToEdit: null,
        newTodo: action.todo
      }
      case 'SHOW_MODAL_EDIT_SUCCESS':
      return {
        ...currentState,
        todos: currentState.todos,
        todo: null,
        isFetching: false,
        error: null,
        successMsg: null,
        showDeleteModal: false,
        showViewModal: false,
        todoToDelete: null,
        showEditModal: true,
        todoToEdit: action.todo,
        newTodo: null
      }
    default:
      return currentState;
  }
}