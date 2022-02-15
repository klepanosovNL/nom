import { useDispatch, useSelector } from 'react-redux';
import {
	setCategory,
	getList,
	checkCurrentPreset,
	setStatusForAllItems,
} from '../../store/actionCreators';
import { getCategoriesCount } from '../ItemList/helpers/filters';

import './action-selection_module.scss';

export const ActionSelection = () => {
	const dispatch = useDispatch();
	const categories = ['Allowed', 'Blocked'];
	const actions = ['Block all', 'Allow all'];
	const filterCategories = useSelector((store) => store.filterCategories);
	const currentPreset = useSelector((store) => store.currentPreset);
	const allList = useSelector((store) => store.list);
	const disabledButton = useSelector((store) => store.blockedButton);

	const handleCategoryChange = (e) => {
		dispatch(setCategory(e.target.id));
	};

	const handleActionClick = (e) => {
		const { id } = e.target;

		allList.forEach((element) => {
			if (id === 'Block all') {
				element.blocked = true;
				element.allowed = false;

				dispatch(setStatusForAllItems('Block all'));
			}

			if (id === 'Allow all') {
				element.allowed = true;
				element.blocked = false;

				dispatch(setStatusForAllItems('Allow all'));
			}
		});

		dispatch(getList(allList));
		dispatch(checkCurrentPreset('none'));
	};

	const categoryCount = getCategoriesCount(allList, currentPreset);

	return (
		<div className='action-selection'>
			<div className='action-selection__categories-panel'>
				<span>Filter Categories:</span>
				<div className='action-selection__categories-panel__items'>
					{categories.map((element) => {
						return (
							<div
								id={element}
								key={element}
								className={`action-selection__categories-panel__item ${
									filterCategories === element ? 'selected' : ''
								}`}
								onClick={handleCategoryChange}
							>
								<span>{categoryCount[element.toLocaleLowerCase()]}</span>
								{element}
							</div>
						);
					})}
				</div>
			</div>
			<div className='action-selection__actions'>
				{actions.map((element) => (
					<div
						key={element}
						id={element}
						className={`action-selection__action ${
							element === disabledButton
								? 'action-selection__action_disabled'
								: ''
						} `}
						onClick={handleActionClick}
					>
						{element}
					</div>
				))}
			</div>
		</div>
	);
};
