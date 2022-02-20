import { Button } from '../Common/Components/Button/Button';

import { useDispatch, useSelector } from 'react-redux';
import {
	setCategory,
	setCurrentPreset,
	setStatusForAllItems,
	toggleDisabledItems,
} from '../../store/actionCreators';
import {
	disableButtonSelector,
	currentPresetSelector,
	allListSelector,
	customListSelector,
	filterByCategoriesSelector,
} from '../../store/selectors';

import './action-selection_module.scss';

export const ActionSelection = () => {
	const dispatch = useDispatch();
	const isDisableBtn = useSelector(disableButtonSelector);
	const isCurrentPreset = useSelector(currentPresetSelector);
	const list = useSelector(allListSelector);
	const customs = useSelector(customListSelector);
	const currentFilter = useSelector(filterByCategoriesSelector);

	let disabledItemsLength;
	let allowedItemsLength;

	if (isCurrentPreset === 'custom') {
		disabledItemsLength = customs.reduce(
			(previousValue, currentValue) =>
				currentValue.isDisabled ? previousValue + 1 : previousValue,
			0
		);
		allowedItemsLength = customs.length - disabledItemsLength;
	} else {
		disabledItemsLength = list.reduce(
			(previousValue, currentValue) =>
				currentValue.isDisabled ? previousValue + 1 : previousValue,
			0
		);

		allowedItemsLength = list.length - disabledItemsLength;
	}

	const handleCategoryChange = (e) => {
		const buttonName = e.target.innerText.replace(/[0-9]/g, '');
		currentFilter
			? dispatch(setCategory(''))
			: dispatch(setCategory(buttonName));
	};

	const handleActionClick = (e) => {
		const buttonName = e.target.innerText;

		if (buttonName === 'Allow all') {
			dispatch(setCurrentPreset('none'));
			dispatch(toggleDisabledItems(false));
		}
		if (buttonName === 'Block all') {
			dispatch(setCurrentPreset('strong'));
			dispatch(toggleDisabledItems(true));
		}

		dispatch(setStatusForAllItems(buttonName));
	};

	return (
		<div className='action-selection'>
			<div className='action-selection__categories-panel'>
				<span>Filter Categories</span>
				<div className='action-selection__categories-panel__items'>
					<Button
						clickHandler={handleCategoryChange}
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
						clickHandler={handleCategoryChange}
						className={`action-selection__categories-panel__item ${
							currentFilter === 'Blocked'
								? 'action-selection__categories-panel__item_selected'
								: ''
						}`}
					>
						<span>{disabledItemsLength}</span>
						Blocked
					</Button>
				</div>
			</div>
			<div className='action-selection__actions'>
				<Button
					clickHandler={handleActionClick}
					className={`action-selection__action ${
						isDisableBtn === 'Block all' || isCurrentPreset === 'strong'
							? 'action-selection__action_disabled'
							: ''
					}`}
				>
					Block all
				</Button>
				<Button
					clickHandler={handleActionClick}
					className={`action-selection__action ${
						isDisableBtn === 'Allow all' || isCurrentPreset === 'none'
							? 'action-selection__action_disabled'
							: ''
					}`}
				>
					Allow all
				</Button>
			</div>
		</div>
	);
};
