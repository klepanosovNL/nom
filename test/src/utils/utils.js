import _ from 'lodash';

export const formatList = (list) => {
	return list
		.sort((current, next) => current.name.localeCompare(next.name))
		.map((el) => ({ ...el, isDisabled: false }));
};

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
