import { Button } from '../Common/Components/Button/Button';

import { useDispatch, useSelector } from 'react-redux';
import {
	setCategory,
	toggleAllToBlock,
	toggleAllToAllow,
} from '../../store/actionCreators';
import {
	allListSelector,
	filterByCategoriesSelector,
	blockedListSelector,
} from '../../store/selectors';

import './action-selection_module.scss';

export const ActionSelection = () => {
	const dispatch = useDispatch();

	const list = useSelector(allListSelector);
	const blockedList = useSelector(blockedListSelector);
	const currentFilter = useSelector(filterByCategoriesSelector);

	const blockedItemsLength = blockedList.length;
	const allowedItemsLength = list.length - blockedItemsLength;

	const isAllowAllDisabled = !!blockedItemsLength;
	const isBlockAllDisabled = !!allowedItemsLength;

	const handleBlockAll = () => dispatch(toggleAllToBlock());
	const handleAllowAll = () => dispatch(toggleAllToAllow());
	const handleToggleFilter = (name) => {
		currentFilter === name ? dispatch(setCategory('')) : dispatch(setCategory(name));
	} 

	return (
		<div className='action-selection'>
			<div className='action-selection__categories-panel'>
				<span>Filter Categories</span>
				<div className='action-selection__categories-panel__items'>
					<Button
						onClick={() => handleToggleFilter("Allowed")}
						className={`action-selection__categories-panel__item ${
							currentFilter === 'Allowed'
								? 'action-selection__categories-panel__item_selected'
								: ''
						}`}
					>
						<span>{allowedItemsLength}</span>
						Allowed
					</Button>
					<Button
						onClick={() => handleToggleFilter("Blocked")}
						className={`action-selection__categories-panel__item ${
							currentFilter === 'Blocked'
								? 'action-selection__categories-panel__item_selected'
								: ''
						}`}
					>
						<span>{blockedItemsLength}</span>
						Blocked
					</Button>
				</div>
			</div>
			<div className='action-selection__actions'>
				<Button
					onClick={handleBlockAll}
					className={`action-selection__action ${
						isAllowAllDisabled
							? 'action-selection__action_disabled'
							: ''
					}`}
					disabled={isAllowAllDisabled}
				>
					Block all
				</Button>
				<Button
					onClick={handleAllowAll}
					className={`action-selection__action ${
						isBlockAllDisabled
							? 'action-selection__action_disabled'
							: ''
					}`}
					disabled={isBlockAllDisabled}
				>
					Allow all
				</Button>
			</div>
		</div>
	);
};
