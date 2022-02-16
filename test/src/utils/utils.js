export const formatList = (list) => {
	return list
		.sort((current, next) => current.name.localeCompare(next.name))
		.map((el) => ({ ...el, isDisabled: false }));
};
