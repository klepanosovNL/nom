import { combineReducers } from 'redux';
import { presetsReducer } from './presets/presets.reducer';
import { filterByCategoriesReducer } from './categories/categories.reducer';
import { searchReducer } from './search/search.reducer';
import { listReducer } from './list/list.reducer';

export const rootReducer = combineReducers({
	presetsReducer,
	filterByCategoriesReducer,
	searchReducer,
	listReducer,
});
