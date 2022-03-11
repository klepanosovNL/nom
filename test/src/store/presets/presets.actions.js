import { CHANGE_PROTECTION } from '../action.types';
import { filterByPreset } from '../../utils/utils';
import { low } from '../../api/api';

export const changeProtection =
	(currentPreset, currentSwitcher) => (dispatch, getState) => {
		const list = getState().listReducer[currentSwitcher];

		dispatch({
			type: CHANGE_PROTECTION,
			payload: {
				currentPreset,
				[currentSwitcher]: filterByPreset(list, currentPreset, low),
				currentSwitcher,
			},
		});
	};
