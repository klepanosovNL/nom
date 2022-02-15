import { useEffect } from 'react';
import { getList } from './store/actionCreators';
import { useDispatch } from 'react-redux';
import { items } from './api/api';

import { Navigator } from './components/Navigator/Navigator';
import { Search } from './components/Search/Search';
import { ItemList } from './components/ItemList/ItemList';
import { ActionSelection } from './components/ActionSelection/ActionSelection';

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
			<ActionSelection />
		</div>
	);
}

export default App;
