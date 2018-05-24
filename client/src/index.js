import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import routes from './routes';
import store from './redux/store';
import './styles/index.css';



ReactDOM.render(
    <Provider store={store}>
        <Router>
            {routes}
        </Router>
    </Provider>,
    document.querySelector('#root')
);
registerServiceWorker();