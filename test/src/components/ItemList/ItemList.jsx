import './item-list_module.scss';
import { useSelector } from 'react-redux';
import { Item } from '../Item/Item';
import {
	filterByName,
	filterCategory,
	filterList,
	filterListByCurrentPreset,
} from './helpers/filters';

export const ItemList = () => {
	const currentPreset = useSelector((store) => store.currentPreset);
	// const filterCategories = useSelector((store) => store.filterCategories);
	// const filter = useSelector((store) => store.filter);
	const allList = useSelector((store) => store.list);

	// const getFilteredArray = () => {
	// 	// const filteredByPreset = filterList(
	// 	// 	filterByName(allList, filter),
	// 	// 	currentPreset
	// 	// );
	// console.log(allList);
	// 	// return filterCategories
	// 	// 	? filterCategory(filteredByPreset, filterCategories)
	// 	// 	: filteredByPreset;
	// };

	return (
		<div className='items'>
			<div className='items__container'>
				{/* filterListByCurrentPreset(allList, currentPreset) */}
				{allList.map(
					({ name, description, isDisabled /*allowed, blocked*/ }) => (
						<Item
							key={name}
							name={name}
							description={description}
							isDisabled={isDisabled}
							// blocked={blocked}
						/>
					)
				)}
			</div>
		</div>
	);
};
