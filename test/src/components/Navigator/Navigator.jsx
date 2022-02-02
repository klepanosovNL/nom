import { filterNames } from '../../api/api';
import { useDispatch, useSelector } from 'react-redux';
import {
	checkCurrentPreset,
	setCategory,
	setFilter,
} from '../../store/actionCreators';
import './navigator_module.scss';

export const Navigator = () => {
	const dispatch = useDispatch();
	const currentPreset = useSelector((store) => store.currentPreset);
	const filterCategories = useSelector((store) => store.filterCategories);
	const inputValue = useSelector((store) => store.filter);

	const clickHandler = (e) => {
		e.stopPropagation();

		const { id } = e.target;

		if (filterCategories) dispatch(setCategory());
		if (inputValue) dispatch(setFilter(''));

		dispatch(checkCurrentPreset(id));
	};

	return (
		<ul className='presets'>
			{filterNames.map((element) => {
				return (
					<li
						className={`presets_item ${
							currentPreset === element ? 'selected' : ''
						}`}
						onClick={clickHandler}
						key={element}
						id={element}
					>
						{element}
					</li>
				);
			})}
		</ul>
	);
};
