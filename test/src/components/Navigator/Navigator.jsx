import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import {
	changeProtection
} from '../../store/actionCreators';
import { Button } from '../Common/Components/Button/Button';
import { currentPresetSelector } from '../../store/selectors';
import { PROTECTIONS_LIST } from "../../store/reducer";

import './navigator_module.scss';

export const Navigator = () => {
	const dispatch = useDispatch();
	const currentPreset = useSelector(currentPresetSelector);

	const clickHandler = protection => {
		dispatch(changeProtection(protection))
	}

	return (
		<div className='presets'>
			{_.map(PROTECTIONS_LIST, (protection) => {
				return (
					<Button
						className={`presets__item ${
							currentPreset === protection ? 'presets__item_selected' : ''
						}`}
						onClick={() => clickHandler(protection)}
						key={protection}
					>
						{protection}
					</Button>
				);
			})}
		</div>
	);
};
