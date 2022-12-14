import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';

import {createStore, applyMiddleware} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

export const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);
