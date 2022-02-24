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
