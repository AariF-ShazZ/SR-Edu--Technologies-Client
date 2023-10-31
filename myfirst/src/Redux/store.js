import {legacy_createStore,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"
import {taskReducer} from "./todosRedux/reducer"
const rootReducer   = combineReducers({
    tasks : taskReducer,
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))