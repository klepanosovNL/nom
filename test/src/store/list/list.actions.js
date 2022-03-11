import {
	LOAD_LIST,
	TOGGLE_CHECKBOX,
	LOAD_SWITCHERS,
	SET_CUSTOM_LIST,
} from '../action.types';
import _ from 'lodash';
import { changeProtection } from '../presets/presets.actions';
import { formatList, toggleCheckboxStatus } from '../../utils/utils';
import { items, switchers } from '../../api/api';
import { filterByPreset } from '../../utils/utils';
import { low } from '../../api/api';

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

export const setCustomList = (listName, list) => {
	return {
		type: SET_CUSTOM_LIST,
		payload: {
			listName,
			list,
		},
	};
};

export const checkItemsLength =
	(currentSwitcher, checkboxName) => (dispatch, getState) => {
		const currentPreset = getState().presetsReducer.currentPreset;
		let listName, disabledItemsLength, allowedItemsLength;
		currentPreset === 'custom'
			? (listName = `${currentSwitcher}Custom`)
			: (listName = currentSwitcher);

		const list = getState().listReducer[listName];
		const customList = getState().listReducer[`${currentSwitcher}Custom`];

		disabledItemsLength = _.filter(list, (item) => item.isDisabled).length;

		allowedItemsLength = list.length - disabledItemsLength;

		switch (true) {
			case disabledItemsLength === list.length && currentPreset !== 'strong':
				return dispatch(changeProtection('strong', currentSwitcher));

			case allowedItemsLength === list.length && currentPreset !== 'none':
				return dispatch(changeProtection('none', currentSwitcher));

			case !_.isEqual(list, customList) && currentPreset === 'low':
				const listToCustom = _.map(customList, (item) => {
					if (item.name === checkboxName) {
						return {
							...item,
							isDisabled: !item.isDisabled,
						};
					}

					return item;
				});

				dispatch(setCustomList(`${currentSwitcher}Custom`, listToCustom));
				dispatch(changeProtection('custom', currentSwitcher));

				break;

			case _.isEqual(filterByPreset(list, 'low', low), customList) &&
				currentPreset === 'custom':
				return dispatch(changeProtection('low', currentSwitcher));

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
		dispatch(checkItemsLength(currentSwitcher, name));
	};
