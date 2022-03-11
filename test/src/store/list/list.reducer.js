import {
	LOAD_LIST,
	TOGGLE_CHECKBOX,
	LOAD_SWITCHERS,
	CHANGE_PROTECTION,
	SET_CUSTOM_LIST,
} from '../action.types';

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
				defaultListCustom: action.payload.list,
				employeesListCustom: action.payload.list,
			};

		case SET_CUSTOM_LIST:
			return {
				...state,
				[action.payload.listName]: action.payload.list,
			};

		case TOGGLE_CHECKBOX:
			return {
				...state,
				[action.payload.listName]: action.payload.list,
			};

		case CHANGE_PROTECTION:
			return {
				...state,
				[action.payload.currentSwitcher]:
					action.payload[action.payload.currentSwitcher],
			};

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
