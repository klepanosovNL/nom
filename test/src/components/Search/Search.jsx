import { useDispatch, useSelector } from 'react-redux';
import {
	setFilterByName,
} from '../../store/actionCreators';
import { Input } from '../Common/Components/Input/Input';
import { filterByNameSelector } from '../../store/selectors';
import './search_module.scss';

export const Search = () => {
	const dispatch = useDispatch();

	const filter = useSelector(filterByNameSelector);

	const handleInputChange = (e) => {
		dispatch(setFilterByName(e.target.value));
	};

	return (
		<div className='search'>
			<i className='fa fa-search'></i>
			<Input
				value={filter}
				placeholder='Filter by name'
				onChange={handleInputChange}
			/>
		</div>
	);
};
