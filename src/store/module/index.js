import { combineReducers } from 'redux';
import counter from './counter';
import todolist from './todolist';

export default combineReducers({
    counter,
    todolist
});
