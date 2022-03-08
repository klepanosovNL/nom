import { protections } from '../../api/api';
import { useDispatch, useSelector } from 'react-redux';
import // toggleDisabledItems,
// toggleDisabledItemsByName,
'../../store/list/listActionCreators';
import { useParams } from 'react-router-dom';
import { changeProtection } from '../../store/presets/presetsActionCreators';
import './navigator_module.scss';
import { Button } from '../Common/Components/Button/Button';
import _ from 'lodash';
import { currentPresetSelector } from '../../store/selectors';
import { setStatusForAllItems } from '../../store/disabledButton/disabledButtonActionCreators';
export const Navigator = () => {
	const dispatch = useDispatch();
	const currentPreset = useSelector(currentPresetSelector);
	const { id } = useParams();

	const clickHandler = (protection) => {
		dispatch(changeProtection(protection, id));
		dispatch(setStatusForAllItems(''));
	};

	return (
		<div className='presets'>
			{_.map(protections, (element) => {
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
