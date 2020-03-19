import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createGlobalStyle } from 'styled-components';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/module';

const GlobalStyle = createGlobalStyle`
body {
    margin:0;
    padding:0;
}`;

const store = createStore(rootReducer);

ReactDOM.render(
    <Fragment>
        <GlobalStyle />
        <Provider store={store}>
            <App />
        </Provider>
    </Fragment>,
    document.getElementById('root')
);
