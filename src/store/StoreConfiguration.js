import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {logger} from "redux-logger";
import accReducer from "../reducers/accReducer";
import profReducer from "../reducers/profReducer";
import regReducer from "../reducers/regReducer";

const reducers = combineReducers({
    accReducer,
    regReducer,
    profReducer
})

export const store = createStore(reducers, applyMiddleware(logger, thunk));