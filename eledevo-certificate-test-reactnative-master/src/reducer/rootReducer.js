import { combineReducers } from 'redux'
import ToDoListReducer from './ToDoListReducer'

export default combineReducers({
    items: ToDoListReducer
})

