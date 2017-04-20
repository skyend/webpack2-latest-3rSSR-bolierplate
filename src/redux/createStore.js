import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reducers from './reducers';


let combinedReducer = combineReducers(reducers);

export default function(_initialState = {}){
    return createStore(
        combinedReducer,
        _initialState
    );
}