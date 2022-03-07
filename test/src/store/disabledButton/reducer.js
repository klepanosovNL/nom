import { SET_STATUS_FOR_ALL_ITEMS } from '../actionTypes';

const initialState = {
	blockedButton: '',
};

export const disabledButtonReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_STATUS_FOR_ALL_ITEMS:
			return {
				...state,
				blockedButton: action.payload.blockedButton,
			};

		default:
			return state;
	}
};
