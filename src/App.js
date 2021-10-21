import { Route } from 'react-router';
import './App.css';
import Authors from './components/Authors/Authors';
import Header from './components/Header/Header';
import NewsFeedContainer from './components/NewsFeed/NewsFeedContainer';

const App = (props) => {
	return <div>
		<Header />
		<div className="app-wrapper">

			<div className='app-wrapper-content'>
				<Route path='/news'
					render={() => <NewsFeedContainer />} />

				<Route path='/authors'
					render={() => <Authors
						authors={props.state.appPage.authors}
					/>} />
			</div>
		</div>
	</div>
}

export default App;

