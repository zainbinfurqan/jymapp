import { createStore, combineReducers, applyMiddleware } from 'redux';
import LoginReducer from './reducer/authReducers'
import GymReducer from './reducer/gymListReducer'
import thunk from 'redux-thunk'
const rootReducer = combineReducers({
  authData: LoginReducer,
  gymList:GymReducer
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;