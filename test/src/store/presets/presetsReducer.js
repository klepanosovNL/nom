import { CHECK_CURRENT_PRESETS } from '../actionTypes';

const initialState = {
	currentPreset: 'none',
};

export const presetsReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHECK_CURRENT_PRESETS:
			return {
				...state,
				currentPreset: action.payload.currentPreset,
			};

		default:
			return state;
	}
};
