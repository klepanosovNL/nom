import { useDispatch, useSelector } from 'react-redux';
import { setFilter, checkCurrentPreset } from '../../store/actionCreators';
import { Input } from '../Common/Components/Input/Input';
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
			<Input
				value={filter}
				placeholder='Filter by name'
				onChange={handleInputChange}
				onFocus={handleInputFocus}
			/>
		</div>
	);
};
