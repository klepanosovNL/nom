import { filterNames } from '../../api/api';
import { useDispatch, useSelector } from 'react-redux';
import // toggleDisabledItems,
// toggleDisabledItemsByName,
'../../store/list/actionCreators';
import { useParams } from 'react-router-dom';
import { setCurrentPreset } from '../../store/presets/actionCreators';
import './navigator_module.scss';
import { Button } from '../Common/Components/Button/Button';
import _ from 'lodash';
import { currentPresetSelector } from '../../store/selectors';
import { setStatusForAllItems } from '../../store/disabledButton/actionCreators';
export const Navigator = () => {
	const dispatch = useDispatch();
	const currentPreset = useSelector(currentPresetSelector);
	const { id } = useParams();

	const clickHandler = (name) => {
		dispatch(setCurrentPreset(name, id));
		dispatch(setStatusForAllItems(''));
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
