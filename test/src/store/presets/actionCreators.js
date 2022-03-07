import { CHECK_CURRENT_PRESETS } from '../actionTypes';

export const setCurrentPreset = (currentPreset) => {
	return {
		type: CHECK_CURRENT_PRESETS,
		payload: {
			currentPreset,
		},
	};
};
