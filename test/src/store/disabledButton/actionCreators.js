import { SET_STATUS_FOR_ALL_ITEMS } from '../actionTypes';

export const setStatusForAllItems = (buttonName) => {
	return {
		type: SET_STATUS_FOR_ALL_ITEMS,
		payload: {
			blockedButton: buttonName,
		},
	};
};
