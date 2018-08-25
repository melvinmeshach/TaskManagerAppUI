import { createStore , applyMiddleware , compose } from 'redux'
import reducers from '../reducers'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import Sagas from '../sagas'

const ConfigureStore		=	() => {
	
	const sagaMiddleware 	=	createSagaMiddleware();

	const middleware 		= [ sagaMiddleware, createLogger() ];
		
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	let store = createStore(reducers, composeEnhancers( applyMiddleware( ...middleware ) ));
	sagaMiddleware.run( Sagas );
	return store;
}

export default ConfigureStore;