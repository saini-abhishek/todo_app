import todoReducer from './toDoReducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: todoReducer,
});

export default rootReducer;
