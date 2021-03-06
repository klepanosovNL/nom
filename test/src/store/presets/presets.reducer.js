import { CHANGE_PROTECTION } from '../action.types';

const initialState = {
	currentPreset: 'none',
};

export const presetsReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_PROTECTION:
			return {
				...state,
				currentPreset: action.payload.currentPreset,
			};

		default:
			return state;
	}
};
