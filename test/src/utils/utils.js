import _ from 'lodash';

export const formatList = (list) =>
	list.sort((current, next) => current.name.localeCompare(next.name));

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
