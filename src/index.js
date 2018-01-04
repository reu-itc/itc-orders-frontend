/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import 'normalize.css';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';

const history = createHistory();
export const store = configureStore(history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
);

registerServiceWorker();
