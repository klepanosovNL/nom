import './item-list_module.scss';
import { useSelector } from 'react-redux';
import { Item } from '../Item/Item';
import _ from 'lodash';
import {
	filterByName,
	filterByCategory,
	filterByPreset,
} from './helpers/filters';
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
	const renderList = currentPreset === 'custom' ? customs : list;
	const EXCEPTIONS = ['Literature', 'Software', 'Dogs', 'Cartoons'];

	return (
		<div className='items'>
			<div className='items__container'>
				{_.map(
					filterByPreset(
						filterByName(
							filterByCategory(renderList, currentCategory),
							filterName
						),
						currentPreset,
						EXCEPTIONS
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
