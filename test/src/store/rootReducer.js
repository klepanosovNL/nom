import { combineReducers } from 'redux';
import { presetsReducer } from './presets/presetsReducer';
import { filterByCategoriesReducer } from './categories/categoriesReducer';
import { searchReducer } from './search/searchReducer';
import { disabledButtonReducer } from './disabledButton/disabledButtonReducer';
import { listReducer } from './list/listReducer';

export const rootReducer = combineReducers({
	presetsReducer,
	filterByCategoriesReducer,
	searchReducer,
	disabledButtonReducer,
	listReducer,
});
