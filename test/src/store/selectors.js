export const disableButtonSelector = (state) =>
	state.disabledButtonReducer.blockedButton;
export const currentPresetSelector = (state) =>
	state.presetsReducer.currentPreset;
export const allListSelector = (currentSwitcher) => (state) => {
	if (currentSwitcher === 'defaultList') {
		return state.listReducer.defaultList;
	}

	if (currentSwitcher === 'employeesList') {
		return state.listReducer.employeesList;
	}
};

export const customListSelector = (currentSwitcher) => (state) => {
	if (currentSwitcher === 'defaultList') {
		return state.listReducer.defaultListCustom;
	}

	if (currentSwitcher === 'employeesList') {
		return state.listReducer.employeesListCustom;
	}
};

export const filterByNameSelector = (state) =>
	state.searchReducer.filterByNameInput;
export const filterByCategoriesSelector = (state) =>
	state.filterByCategoriesReducer.filterByCategories;
export const curentSwitcherSeletor = (state) =>
	state.switcherReducer.currentSwitcher;

export const getSwitchers = (state) => state.listReducer.switchers;
