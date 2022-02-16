import { filterNames } from '../../api/api';
import { useDispatch, useSelector } from 'react-redux';
import {
	checkCurrentPreset,
	setNewField,
	// setCategory,
	// setFilter,
} from '../../store/actionCreators';
import './navigator_module.scss';
import { Button } from '../Common/Components/Button/Button';

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

		if (name === 'strong') {
			dispatch(setNewField('isDisabled', true));
		} else {
			dispatch(setNewField('isDisabled', false));
		}
		// console.log(store);
	};

	return (
		<div className='presets'>
			{filterNames.map((element) => {
				return (
					<Button
						className={`presets__item ${
							currentPreset === element ? 'presets__item_selected' : ''
						}`}
						clickHandler={() => clickHandler(element)}
						content={element}
						key={element}
					/>
					// <li
					// 	className={`presets__item ${
					// 		currentPreset === element ? 'presets__item_selected' : ''
					// 	}`}
					// 	onClick={clickHandler}
					// 	key={element}
					// 	id={element}
					// >
					// 	{element}
					// </li>
				);
			})}
		</div>
	);
};
