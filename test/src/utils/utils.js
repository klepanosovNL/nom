export const formatList = (list) => {
	return list
		.sort((current, next) => current.name.localeCompare(next.name))
		.map((el) => ({ ...el, isDisabled: false }));
};

export const toggleDisabledList = (list, value) => {
	return list.map((element) => ({
		...element,
		isDisabled: value,
	}));
};

export const toggleDisabledItemByName = (list, names) => {
	return list.map((element) => {
		return {
			...element,
			isDisabled: names.includes(element.name),
		};
	});
};
