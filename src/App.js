//Router
import { Route } from 'react-router-dom';
//Components and pages
import Nav from './components/Nav';
import Home from './pages/Home';
//Styles
import GlobalStyles from './components/GlobalStyles';

function App() {
	return (
		<div className='App'>
			<GlobalStyles />
			<Nav />
			<Route path={['/game/:id', '/']}>
				<Home />
			</Route>
		</div>
	);
}

export default App;
