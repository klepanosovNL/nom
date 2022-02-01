import { useEffect } from 'react';
import { getList } from './store/actionCreators';
import { useDispatch } from 'react-redux';
import { items } from './api/api';

import { Navigator } from './components/Navigator/Navigator';
import { Search } from './components/Search/Search';
import { ItemList } from './components/ItemList/ItemList';
import { Footer } from './components/Footer/Footer';

import './App.css';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getList(items));
	}, [dispatch]);

	return (
		<div className='wrapper'>
			<div className='header'>
				<Navigator />
				<Search />
			</div>
			<ItemList />
			<Footer />
		</div>
	);
}

export default App;
