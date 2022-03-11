import { LOAD_LIST, TOGGLE_CHECKBOX, LOAD_SWITCHERS } from '../action.types';
import _ from 'lodash';
import { changeProtection } from '../presets/presets.actions';

import { formatList, toggleCheckboxStatus } from '../../utils/utils';

import { items, switchers } from '../../api/api';
export const loadSwitchers = () => {
	return {
		type: LOAD_SWITCHERS,
		payload: {
			keys: _.map(switchers, ({ id }) => id),
			object: _.keyBy(switchers, 'id'),
		},
	};
};

export const loadList = () => {
	return {
		type: LOAD_LIST,
		payload: {
			list: formatList(items),
		},
	};
};

export const checkItemsLength = (currentSwitcher) => (dispatch, getState) => {
	const currentPreset = getState().presetsReducer.currentPreset;
	let listName;
	currentPreset === 'custom'
		? (listName = `${currentSwitcher}Custom`)
		: (listName = currentSwitcher);

	const list = getState().listReducer[listName];

	let disabledItemsLength, allowedItemsLength;

	disabledItemsLength = _.filter(list, (item) => item.isDisabled).length;

	allowedItemsLength = list.length - disabledItemsLength;

	switch (true) {
		case disabledItemsLength === list.length && currentPreset !== 'strong':
			return dispatch(changeProtection('strong', currentSwitcher));

		case allowedItemsLength === list.length && currentPreset !== 'none':
			return dispatch(changeProtection('none', currentSwitcher));

		default:
			break;
	}
};

const checkboxToggleAction = (list, name, listName) => {
	return {
		type: TOGGLE_CHECKBOX,
		payload: {
			list: toggleCheckboxStatus(list, name),
			listName,
		},
	};
};

export const checkBoxToggle =
	(name, currentSwitcher) => (dispatch, getState) => {
		let listName;
		const currentPreset = getState().presetsReducer.currentPreset;

		currentPreset === 'custom'
			? (listName = `${currentSwitcher}Custom`)
			: (listName = currentSwitcher);

		const list = getState().listReducer[listName];

		dispatch(checkboxToggleAction(list, name, listName));
		dispatch(checkItemsLength(currentSwitcher));
	};
