export const filterListByCurrentPreset = (array, currentPreset) => {
	switch (currentPreset) {
		case 'none':
			return array.filter((element) => !element.blocked);

		case 'low':
			return array.filter((element) => element.low);

		case 'strong':
			return array.filter((element) => element.blocked);

		case 'custom':
			return array.filter((element) => element.custom);

		default:
			return array;
	}
};

export const filterCategory = (array, category) => {
	switch (category.toLowerCase()) {
		case 'allowed':
			return array.filter((element) => element.allowed);

		case 'blocked':
			return array.filter((element) => element.blocked);

		default:
			return array;
	}
};

export const getCategoriesCount = (array, currentPreset) => {
	return array.reduce(
		(curr, item) => {
			const isCurrentPreset = Object.keys(item).includes(currentPreset);

			if (!isCurrentPreset && currentPreset !== 'none') return curr;

			if (item.allowed) {
				return { ...curr, allowed: curr.allowed + 1 };
			}

			if (item.blocked && currentPreset !== 'none') {
				return { ...curr, blocked: curr.blocked + 1 };
			}

			return curr;
		},
		{
			allowed: 0,
			blocked: 0,
		}
	);
};

export const filterByName = (array, name) => {
	return name ? array.filter((item) => item.name.startsWith(name)) : array;
};
