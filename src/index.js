
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

// state={state} dispatch={store.dispatch.bind(store)} store={store} 



    ReactDOM.render(
        <BrowserRouter>
        <React.StrictMode>
            <Provider store = {store}>
            <App />
            </Provider>
        </React.StrictMode>
        </BrowserRouter>, document.getElementById('root')
    );



// rerenderEntireTree(store.getState());

// store.subscribe(() => {
//     let state = store.getState();
//     rerenderEntireTree(state);
// });


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
