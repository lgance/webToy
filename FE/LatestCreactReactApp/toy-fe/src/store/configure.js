import { createStore, compose} from 'redux';
// applyMiddleware

import combineReducers from './modules';

// const middlewares = [penderMiddleware()];

// 개발모드일경우만 Redux Devtools
const isDev = process.env.NODE_ENV ==='development';
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools || compose;

const configure = (preloadedState) => createStore(combineReducers,preloadedState,
    composeEnhancers(
        // applyMiddleware(...middlewares)
));
export default configure;