// ./react-redux-client/src/actions/appActions.js
export const toggleAddTodo = () => {
    return {
      type: 'TOGGLE_ADD_TODO'
    }
  }

  export const showModalNewTodo = (todo) => {
    return {
      type: 'SHOW_MODAL_SUCCESS',
      todo: todo
    }
  }