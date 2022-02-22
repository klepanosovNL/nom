import './item-list_module.scss';
import { useSelector } from 'react-redux';
import { Item } from '../Item/Item';
import _ from 'lodash';

import {
	allListSelector,
	blockedListSelector,
	filterByNameSelector,
	filterByCategoriesSelector,
} from '../../store/selectors';

export const ItemList = () => {
	const search = useSelector(filterByNameSelector);
	const filter = useSelector(filterByCategoriesSelector);
	const list = useSelector(allListSelector);
	const blockedList = useSelector(blockedListSelector);

	const searchFn = ({name}) => _.includes(name, search);
	const filterFn = ({name}) => filter === "Allowed" 
		? !_.includes(blockedList, name) 
		: _.includes(blockedList, search);

	const renderList = _(list)
			.filter(search ? searchFn : undefined)
			.filter(filter ? filterFn : undefined)
			.map(category => ({
				...category,
				isBlocked: _.includes(blockedList, category.name)
			}))
			.value();

	return (
		<div className='items'>
			<div className='items__container'>
				{_.map(renderList, ({ name, description, isBlocked }) => (
						<Item key={name} name={name} description={description} isBlocked={isBlocked} />
					)
				)}
			</div>
		</div>
	);
};
