
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import Routes from './Routes'
import ConfigureStore from './store/ConfigureStore'

import '../css/style.css'
import '../css/reset.css'

export const store		=	ConfigureStore();

ReactDOM.render(
					<Provider store={store}> 
							<Router history={browserHistory} routes={Routes} ></Router>
					</Provider>
	 			, document.getElementById( 'root' ) );