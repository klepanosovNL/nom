import { Button } from '../Common/Components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../store/categories/categories.actions';
import { changeProtection } from '../../store/presets/presets.actions';
import {
	currentPresetSelector,
	allListSelector,
	customListSelector,
	filterByCategoriesSelector,
} from '../../store/selectors';
import { useParams } from 'react-router-dom';
import './action-selection_module.scss';

export const ActionSelection = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const isCurrentPreset = useSelector(currentPresetSelector);
	let getUserList;
	const currentFilter = useSelector(filterByCategoriesSelector);

	isCurrentPreset === 'custom'
		? (getUserList = customListSelector)
		: (getUserList = allListSelector);

	const renderList = useSelector(getUserList(id));

	let disabledItemsLength;
	let allowedItemsLength;

	disabledItemsLength = renderList.reduce(
		(previousValue, currentValue) =>
			currentValue.isDisabled ? previousValue + 1 : previousValue,
		0
	);

	allowedItemsLength = renderList.length - disabledItemsLength;

	const handleCategoryChange = (e) => {
		const buttonName = e.target.innerText.replace(/[0-9]/g, '');
		currentFilter === buttonName
			? dispatch(setCategory(''))
			: dispatch(setCategory(buttonName));
	};

	const handleActionClick = (e) => {
		const buttonName = e.target.innerText;

		buttonName === 'Allow all'
			? dispatch(changeProtection('none', id))
			: dispatch(changeProtection('strong', id));
	};

	return (
		<div className='action-selection'>
			<div className='action-selection__categories-panel'>
				<span>Filter Categories</span>
				<div className='action-selection__categories-panel__items'>
					<Button
						onClick={handleCategoryChange}
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
						onClick={handleCategoryChange}
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
					onClick={handleActionClick}
					className={`action-selection__action ${
						renderList.length === disabledItemsLength
							? 'action-selection__action_disabled'
							: ''
					}`}
				>
					Block all
				</Button>
				<Button
					onClick={handleActionClick}
					className={`action-selection__action ${
						renderList.length === allowedItemsLength
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
