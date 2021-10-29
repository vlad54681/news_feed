import { Redirect, Route } from 'react-router';
import './App.css';
import Authors from './components/Authors/Authors';
import Header from './components/Header/Header';
import NewsFeed from './components/NewsFeed/NewsFeed';

const App = (props) => {

	return <div>
		<Header />
		<div className="app-wrapper">

			<div className='app-wrapper-content'>
				<Redirect to={'/news'} />
				<Route path='/news'
					render={() => <NewsFeed />} />

				<Route path='/authors'
					render={() => <Authors
						authors={props.state.appPage.authors}
					/>} />
			</div>
		</div>
	</div>
}

export default App;

