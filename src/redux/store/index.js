import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import {AppConstants} from '../../AppConstant'
import {createJobCoins} from '../../Utility/Utils'
import transactionReducer from '../reducer/transactionReducer';

const defaultData = localStorage.getItem('initialCoins');
let INITIAL_STATE = {};
if (!defaultData) {
	const initialCoins =  createJobCoins(AppConstants.MAX_COINS)
	localStorage.setItem('initialCoins', JSON.stringify(initialCoins));
}


const composeEnhancers = typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const configureStore = () => {
	let store = createStore(transactionReducer, INITIAL_STATE, composeEnhancers(applyMiddleware(thunk)));
	return store;
}
export default configureStore
