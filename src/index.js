import React from 'react'
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './app';


const render = (App) => {
    ReactDOM.render(
        <AppContainer>
            <App/>
        </AppContainer>,
        document.getElementById('app-container')
    );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./app', () => {
        render(require('./app').default)
    });
}