import {
	LOAD_LIST,
	TOGGLE_CHECKBOX,
	SET_CUSTOM,
	TOGGLE_CHECKBOX_IN_CUSTOM,
	LOAD_SWITCHERS,
} from '../actionTypes';

const initialState = {
	defaultList: [],
	defaultListCustom: [],
	employeesList: [],
	employeesListCustom: [],
	switchers: {},
};

export const listReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_LIST:
			return {
				...state,
				employeesList: action.payload.list,
				defaultList: action.payload.list,
			};

		case TOGGLE_CHECKBOX:
			return {
				...state,
				[action.payload.currentSwitcher]:
					action.payload[action.payload.currentSwitcher],
			};

		case TOGGLE_CHECKBOX_IN_CUSTOM: {
			return {
				...state,
				[action.payload.currentCustom]:
					action.payload[action.payload.currentCustom],
			};
		}

		case SET_CUSTOM: {
			return {
				...state,
				[action.payload.currentCustom]:
					action.payload[action.payload.currentCustom],
			};
		}

		case LOAD_SWITCHERS: {
			return {
				...state,
				switchers: action.payload,
			};
		}

		default:
			return state;
	}
};
