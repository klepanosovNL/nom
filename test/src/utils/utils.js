import _ from 'lodash';

export const formatList = (list) =>
	list.sort((current, next) => current.name.localeCompare(next.name));

export const toggleDisabledList = (list, value) => {
	return _.map(list, (element) => ({
		...element,
		isDisabled: value,
	}));
};

export const toggleDisabledItemByName = (list, names) => {
	return _.map(list, (element) => {
		return {
			...element,
			isDisabled: _.includes(names, element.name),
		};
	});
};

export const toggleCheckboxStatus = (list, name) => {
	return _.map(list, (element) => {
		if (element.name === name) {
			return {
				...element,
				isDisabled: !element.isDisabled,
				isCustom: true,
			};
		}

		return element;
	});
};
