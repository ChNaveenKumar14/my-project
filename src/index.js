import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './redux/components/app';
import rootReducer from './redux/reducers';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import BasicExample from './router';
// import Form from './basics/form';
// import TodoList from './Todo/TodoList';

const  store=createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
    {/* <App /> */}
    <BasicExample />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
