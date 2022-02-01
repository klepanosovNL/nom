export const filterList = (array, currentPreset) => {
	switch (currentPreset) {
		case 'none':
			return array.filter((element) => element.allowed);

		case 'low':
			return array.filter((element) => element.low);

		case 'strong':
			return array.filter((element) => element.strong);

		case 'custom':
			return [];

		default:
			return array;
	}
};

export const filterCategory = (array, category) => {
	switch (category) {
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
