// ./react-redux-client/src/containers/App.js
import { connect } from 'react-redux';
import * as appActions from '../actions/appActions';
//import * as todoActions from '../actions/todoActions';
import App from '../components/app';
// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedAppState: state.appState
  }
}
// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    mappedToggleAddTodo: () => dispatch(appActions.toggleAddTodo()),
    mappedShowModalTodo: todo=> { return(dispatch(appActions.showModalNewTodo(todo)))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);