import { filterNames } from '../../api/api';
import { useDispatch, useSelector } from 'react-redux';
import {
	setCurrentPreset,
	toggleDisabledItems,
	toggleDisabledItemsByName,
} from '../../store/actionCreators';
import './navigator_module.scss';
import { Button } from '../Common/Components/Button/Button';
import _ from 'lodash';
import { currentPresetSelector } from '../../store/selectors';
export const Navigator = () => {
	const dispatch = useDispatch();
	const currentPreset = useSelector(currentPresetSelector);

	const clickHandler = (name) => {
		dispatch(setCurrentPreset(name));

		switch (name) {
			case 'low':
				dispatch(toggleDisabledItems(false));
				dispatch(
					toggleDisabledItemsByName([
						'Literature',
						'Software',
						'Dogs',
						'Cartoons',
					])
				);
				break;

			case 'strong':
				dispatch(toggleDisabledItems(true));
				break;
			case 'none':
				dispatch(toggleDisabledItems(false));
				break;

			default:
				break;
		}
	};

	return (
		<div className='presets'>
			{_.map(filterNames, (element) => {
				return (
					<Button
						className={`presets__item ${
							currentPreset === element ? 'presets__item_selected' : ''
						}`}
						onClick={() => clickHandler(element)}
						key={element}
					>
						{element}
					</Button>
				);
			})}
		</div>
	);
};
