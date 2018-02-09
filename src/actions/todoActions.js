// ./react-redux-client/src/actions/todoActions.js
const apiUrl = "http://localhost:3031/api";
export const toggleAddBook = () => {
  return {
    type: 'TOGGLE_ADD_TODO'
  }
}

export const showEditModalTodo = (todo) => {
  return {
    type: 'SHOW_MODAL_EDIT_SUCCESS',
    todo: todo
  }
}

export const addNewTodo = (todo) => {

  return (dispatch) => {
    dispatch(saveTodoRequest(todo));
    return fetch(apiUrl, {
      method: 'post',
      body: JSON.stringify(todo),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',

      }
    })
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
            dispatch(saveTodoSuccess(data.todo, data.message));
          })
        }
        else {
          response.json().then(error => {
            dispatch(saveTodoFailed(error));
          })
        }
      })
  }
}

export const saveTodoRequest = (todo) => {
  return {
    type: 'ADD_NEW_TODO_REQUEST',
    todo: todo
  }
}

export const saveTodoSuccess = (todo, message) => {

  return {
    type: 'ADD_NEW_TODO_SUCESS',
    todo: todo,
    message
  }
}

export const saveTodoFailed = (error) => {
  return {
    type: 'ADD_NEW_TODO_FAILED',
    error
  }
}

export const editTodo = (todo) => {
  return (dispatch) => {
    dispatch(editTodoRequest(todo));
    return fetch(apiUrl, {
      method: 'put',
      body: JSON.stringify(todo),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
          


            dispatch(editTodoSuccess(data.todo, data.message));
          })
        }
        else {
          response.json().then(error => {
            dispatch(editTodoFailed(error));
          })
        }
      })
  }
}

export const editTodoRequest = (todo) => {
  return {
    type: 'EDIT_TODO_REQUEST',
    todo: todo
  }
}
//Sync action
export const editTodoSuccess = (todo, message) => {
  console.log('editTodoSuccess');
  return {
    type: 'EDIT_TODO_SUCCESS',
    todo: todo,
    message: message
  }
}
export const editTodoFailed = (error) => {
  return {
    type: 'EDIT_TODO_FAILED',
    error
  }
}

//Async action
export const fetchTodos = () => {
  // Returns a dispatcher function
  // that dispatches an action at later time
  return (dispatch) => {
    dispatch(fetchTodosRequest());
    // Returns a promise
    return fetch(apiUrl)
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
            dispatch(fetchTodosSuccess(data.todos, data.message));
          })
        }
        else {
          response.json().then(error => {
            dispatch(fetchTodosFailed(error));
          })
        }
      })
  }
}
export const fetchTodosRequest = () => {
  return {
    type: 'FETCH_TODOS_REQUEST'
  }
}
//Sync action
export const fetchTodosSuccess = (todos, message) => {
  return {
    type: 'FETCH_TODOS_SUCCESS',
    todos: todos,
    message: message,
    receivedAt: Date.now
  }
}
export const fetchTodosFailed = (error) => {
  return {
    type: 'FETCH_TODOS_FAILED',
    error
  }
}

//Fetching TODO
export const fetchTodoById = (todoId) => {
  return (dispatch) => {
    dispatch(fetchTodoRequest());
    // Returns a promise
    return fetch(apiUrl + "/" + todoId)
      .then(response => {

        if (response.ok) {
          response.json().then(data => {
            dispatch(fetchTodoSuccess(data.todo[0], data.message));
          })
        }
        else {
          response.json().then(error => {
            dispatch(fetchTodoFailed(error));
          })
        }
      })
  }
}



export const fetchTodoRequest = () => {
  return {
    type: 'FETCH_TODO_REQUEST'
  }
}
//Sync action
export const fetchTodoSuccess = (todo, message) => {
  return {
    type: 'FETCH_TODO_SUCCESS',
    todo: todo,
    message: message,
    receivedAt: Date.now
  }
}
export const fetchTodoFailed = (error) => {
  return {
    type: 'FETCH_TODO_FAILED',
    error
  }
}

//Fetching TODO
export const deleteTodo = (todoId) => {
  return (dispatch) => {
    dispatch(deleteTodoRequest(todoId));
    // Returns a promise
    return fetch(apiUrl + "/" + todoId, { method: 'delete' })
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
            dispatch(deleteTodoSuccess(todoId, data.message));
          })
        }
        else {
          response.json().then(error => {
            dispatch(deleteTodoFailed(error));
          })
        }
      })
  }
}

export const deleteTodoRequest = (todoId) => {
  return {
    type: 'DELETE_TODO_REQUEST',
    todo: todoId
  }
}
//Sync action
export const deleteTodoSuccess = (todoId, message) => {
  return {
    type: 'DELETE_TODO_SUCCESS',
    todo: todoId,
    message: message
  }
}
export const deleteTodoFailed = (error) => {
  return {
    type: 'DELETE_TODO_FAILED',
    error
  }
}