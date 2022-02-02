import { useDispatch, useSelector } from 'react-redux';
import {
	setCategory,
	getList,
	checkCurrentPreset,
} from '../../store/actionCreators';
import { getCategoriesCount } from '../ItemList/helpers/filters';

import './footer_module.scss';

export const Footer = () => {
	const dispatch = useDispatch();
	const categories = ['Allowed', 'Blocked'];
	const actions = ['Block all', 'Allow all'];
	const filterCategories = useSelector((store) => store.filterCategories);
	const currentPreset = useSelector((store) => store.currentPreset);
	const allList = useSelector((store) => store.list);

	const handleCategoryChange = (e) => {
		dispatch(setCategory(e.target.id));
	};

	const handleActionClick = (e) => {
		const { id } = e.target;

		allList.forEach((element) => {
			if (id === 'Block all') {
				element.blocked = true;
				element.allowed = false;
			}

			if (id === 'Allow all') {
				element.allowed = true;
				element.blocked = false;
			}
		});

		dispatch(getList(allList));
		dispatch(checkCurrentPreset('none'));
	};

	const categoryCount = getCategoriesCount(allList, currentPreset);

	return (
		<div className='footer'>
			<div className='footer_categories-panel'>
				<span>Filter Categories:</span>
				<div className='footer_categories-panel_items'>
					{categories.map((element) => {
						return (
							<div
								id={element}
								key={element}
								className={`footer_categories-panel_item ${
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
			<div className='footer-actions'>
				{actions.map((element) => (
					<div
						key={element}
						id={element}
						className='footer-action'
						onClick={handleActionClick}
					>
						{element}
					</div>
				))}
			</div>
		</div>
	);
};
