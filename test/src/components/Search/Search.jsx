import { useDispatch, useSelector } from 'react-redux';
import { setFilter, checkCurrentPreset } from '../../store/actionCreators';
import './search_module.scss';

export const Search = () => {
	const dispatch = useDispatch();

	const filter = useSelector((store) => store.filter);

	const handleInputChange = (e) => {
		dispatch(setFilter(e.target.value));
	};

	const handleInputFocus = () => dispatch(checkCurrentPreset('none'));

	return (
		<div className='search'>
			<i className='fa fa-search'></i>
			<input
				value={filter}
				placeholder='Filter by name'
				onChange={handleInputChange}
				onFocus={handleInputFocus}
			></input>
		</div>
	);
};
