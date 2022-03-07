import { useEffect } from 'react';
import { loadList, loadSwitchers } from './store/list/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { InfoTable } from './components/InfoTable/InfoTable';
import { Routes, Route, Navigate } from 'react-router-dom';
import _ from 'lodash';
import { getSwitchers } from './store/selectors';
import './App.css';

function App() {
	const dispatch = useDispatch();
	const switchers = useSelector(getSwitchers).keys;

	useEffect(() => {
		dispatch(loadSwitchers());
		dispatch(loadList());
	}, [dispatch]);

	if (_.isEmpty(switchers)) return null;

	const defaultSwitcher = switchers[0];

	return (
		<Routes>
			<Route path='/group/:id' element={<InfoTable />} />
			<Route path='*' element={<Navigate to={`/group/${defaultSwitcher}`} />} />
		</Routes>
	);
}

export default App;
