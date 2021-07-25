import { createStore, combineReducers } from "redux";
import postsReducer from '../reducers/posts-reducer';
import dialogsReducer from '../reducers/dialogs-reducer';
import usersReducer from "../reducers/users-reducer";





let reducers = combineReducers({
    postsReducer: postsReducer,
    dialogsReducer: dialogsReducer,
    usersReducer: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;