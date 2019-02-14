import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import comnbineReducer from './rootReducer';


const intialState = {};

const store = createStore(comnbineReducer, intialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;
