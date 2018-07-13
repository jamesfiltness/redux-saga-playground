import "regenerator-runtime/runtime";
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import Root from './containers/Root';
import reducers from './reducers';

import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

render(
    <Root store={store} />,
    document.getElementById('root')
);
