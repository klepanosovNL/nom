import './item-list_module.scss';
import { useSelector } from 'react-redux';
import { Item } from '../Item/Item';
import _ from 'lodash';
import { filterByName, filterByCategory } from './helpers/filters';
import {
	allListSelector,
	customListSelector,
	filterByNameSelector,
	currentPresetSelector,
	filterByCategoriesSelector,
} from '../../store/selectors';

export const ItemList = () => {
	const currentPreset = useSelector(currentPresetSelector);
	const filterName = useSelector(filterByNameSelector);
	const list = useSelector(allListSelector);
	const customs = useSelector(customListSelector);
	const currentCategory = useSelector(filterByCategoriesSelector);
	const renderList = currentPreset === 'custom' ? customs : list;

	return (
		<div className='items'>
			<div className='items__container'>
				{_.map(
					filterByName(
						filterByCategory(renderList, currentCategory),
						filterName
					),
					({ name, description, isDisabled }) => (
						<Item
							key={name}
							name={name}
							description={description}
							isDisabled={isDisabled}
						/>
					)
				)}
			</div>
		</div>
	);
};
