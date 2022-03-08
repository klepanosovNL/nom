import {
	LOAD_LIST,
	TOGGLE_CHECKBOX,
	SET_CUSTOM,
	TOGGLE_CHECKBOX_IN_CUSTOM,
	LOAD_SWITCHERS,
} from '../actionTypes';
import _ from 'lodash';

import { setCurrentPreset } from '../presets/presetsActionCreators';
import { setStatusForAllItems } from '../disabledButton/disabledButtonActionCreators';

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

export const checkBoxToggle =
	(name, currentSwitcher) => (dispatch, getState) => {
		const store = getState();
		const list = store.listReducer[currentSwitcher];
		const customs = store.listReducer[`${currentSwitcher}Custom`];

		const { currentPreset } = store.presetsReducer;

		if (currentPreset === 'custom') {
			return dispatch({
				type: TOGGLE_CHECKBOX_IN_CUSTOM,
				payload: {
					[`${currentSwitcher}Custom`]: toggleCheckboxStatus(customs, name),
					currentCustom: [`${currentSwitcher}Custom`],
				},
			});
		} else {
			dispatch(setCurrentPreset('custom'));
		}

		dispatch({
			type: TOGGLE_CHECKBOX,
			payload: {
				[currentSwitcher]: toggleCheckboxStatus(list, name),
				currentSwitcher,
			},
		});

		const element = list.find((item) => item.name === name);
		element.isDisabled = false;

		if (!element.isCustom) {
			dispatch({
				type: SET_CUSTOM,
				payload: {
					[`${currentSwitcher}Custom`]: [...customs, element],
					currentCustom: [`${currentSwitcher}Custom`],
					currentSwitcher,
				},
			});
		}

		dispatch(setStatusForAllItems(''));
	};
