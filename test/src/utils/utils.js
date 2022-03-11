import _ from 'lodash';

export const formatList = (list) =>
	list.sort((current, next) => current.name.localeCompare(next.name));

export const toggleCheckboxStatus = (list, name) => {
	return _.map(list, (element) => {
		if (element.name === name) {
			return {
				...element,
				isDisabled: !element.isDisabled,
			};
		}

		return element;
	});
};

export const filterByName = (array, name) => {
	return name
		? array.filter((item) => {
				const itemName = item.name.toLowerCase();
				const filterName = name.toLowerCase();
				return itemName.startsWith(filterName);
		  })
		: array;
};

export const filterByCategory = (array, category) => {
	switch (category.toLowerCase()) {
		case 'allowed':
			return array.filter((element) => !element.isDisabled);

		case 'blocked':
			return array.filter((element) => element.isDisabled);

		default:
			return array;
	}
};

export const filterByPreset = (array, currentPreset, exception = []) => {
	switch (currentPreset) {
		case 'low':
			return _.map(array, (element) => {
				return {
					...element,
					isDisabled: _.includes(exception, element.name),
				};
			});

		case 'none':
			return _.map(array, (element) => ({
				...element,
				isDisabled: false,
			}));

		case 'strong':
			return _.map(array, (element) => ({
				...element,
				isDisabled: true,
			}));

		default:
			return array;
	}
};
