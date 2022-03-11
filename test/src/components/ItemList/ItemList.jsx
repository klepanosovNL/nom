import './item-list_module.scss';
import { useSelector } from 'react-redux';
import { Item } from '../Item/Item';
import _ from 'lodash';
import { filterByName, filterByCategory } from '../../utils/utils';
import { useParams } from 'react-router-dom';
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
	const { id } = useParams();
	const list = useSelector(allListSelector(id));
	const customs = useSelector(customListSelector(id));
	const currentCategory = useSelector(filterByCategoriesSelector);
	const renderList =
		currentPreset === 'custom'
			? filterByName(filterByCategory(customs, currentCategory), filterName)
			: filterByName(filterByCategory(list, currentCategory), filterName);
	return (
		<div className='items'>
			<div className='items__container'>
				{_.map(renderList, ({ name, description, isDisabled }) => (
					<Item
						key={name}
						name={name}
						description={description}
						isDisabled={isDisabled}
					/>
				))}
			</div>
		</div>
	);
};
