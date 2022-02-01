import './item-list_module.scss';
import { useSelector } from 'react-redux';
import { Item } from '../Item/Item';
import { filterByName, filterCategory, filterList } from './helpers/filters';

export const ItemList = () => {
	const currentPreset = useSelector((store) => store.currentPreset);
	const filterCategories = useSelector((store) => store.filterCategories);
	const filter = useSelector((store) => store.filter);
	const allList = useSelector((store) => store.list);

	const getFilteredArray = () => {
		const filteredByPreset = filterList(
			filterByName(allList, filter),
			currentPreset
		);

		return filterCategories
			? filterCategory(filteredByPreset, filterCategories)
			: filteredByPreset;
	};

	return (
		<div className='items'>
			<div className='items_container'>
				{getFilteredArray().map(({ name, description, allowed }) => (
					<Item
						key={name}
						name={name}
						description={description}
						allowed={allowed}
					/>
				))}
			</div>
		</div>
	);
};
