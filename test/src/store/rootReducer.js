import { combineReducers } from 'redux';
import { presetsReducer } from './presets/reducer';
import { filterByCategoriesReducer } from './categories/reducer';
import { searchReducer } from './search/reducer';
import { disabledButtonReducer } from './disabledButton/reducer';
import { listReducer } from './list/reducer';

export const rootReducer = combineReducers({
	presetsReducer,
	filterByCategoriesReducer,
	searchReducer,
	disabledButtonReducer,
	listReducer,
});
