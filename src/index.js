import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
//import AppContainer from './components/AppContainer';
import AppContainer from './components/AppContainer2';
import TodoStore from './redux/TodoStore';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={TodoStore}>
        <AppContainer />
    </Provider>, 
    document.getElementById('root'));

