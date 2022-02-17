import { filterNames } from '../../api/api';
import { useDispatch, useSelector } from 'react-redux';
import {
	checkCurrentPreset,
	toggleDisabledField,
	toggleDisabledFieldByName,
	// setCategory,
	// setFilter,
} from '../../store/actionCreators';
import './navigator_module.scss';
import { Button } from '../Common/Components/Button/Button';
import _ from 'lodash';

export const Navigator = () => {
	const dispatch = useDispatch();
	const currentPreset = useSelector((store) => store.currentPreset);
	// const store = useSelector((store) => store);

	// const filterCategories = useSelector((store) => store.filterCategories);
	// const inputValue = useSelector((store) => store.filter);

	const clickHandler = (name) => {
		// e.stopPropagation();

		// const { id } = e.target;
		// console.log(name);
		// if (filterCategories) dispatch(setCategory());
		// if (inputValue) dispatch(setFilter(''));

		dispatch(checkCurrentPreset(name));

		switch (name) {
			case 'low':
				dispatch(toggleDisabledField(false));
				dispatch(
					toggleDisabledFieldByName([
						'Literature',
						'Software',
						'Dogs',
						'Cartoons',
					])
				);
				break;

			case 'strong':
				dispatch(toggleDisabledField(true));
				break;

			case 'custom':
			case 'none':
				dispatch(toggleDisabledField(false));
				break;

			default:
				break;
		}

		// if (name === 'strong') {
		// 	dispatch(toggleDisabledField(true));
		// } else {
		// 	dispatch(toggleDisabledField(false));
		// }
		// console.log(store);
	};

	return (
		<div className='presets'>
			{_.map(filterNames, (element) => {
				return (
					<Button
						className={`presets__item ${
							currentPreset === element ? 'presets__item_selected' : ''
						}`}
						clickHandler={() => clickHandler(element)}
						content={element}
						key={element}
					/>
				);
			})}
		</div>
	);
};
