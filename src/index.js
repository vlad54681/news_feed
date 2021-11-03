import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './store/store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


let rerenderEntireTree = (state) => {

	ReactDOM.render(
		<BrowserRouter>
			<Provider store={store}>
				<App state={state} />
			</Provider>
		</BrowserRouter>, document.getElementById('root')
	);
}


rerenderEntireTree(store.getState());
store.subscribe(() => {
	let state = store.getState();
	rerenderEntireTree(state);
}); reportWebVitals();

