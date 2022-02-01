import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../store/actionCreators';
import { getCategoriesCount } from '../ItemList/helpers/filters';

import './footer_module.scss';

export const Footer = () => {
	const dispatch = useDispatch();
	const categories = ['allowed', 'blocked'];
	const actions = ['block all', 'allow all'];
	const filterCategories = useSelector((store) => store.filterCategories);
	const currentPreset = useSelector((store) => store.currentPreset);
	const allList = useSelector((store) => store.list);

	const handleCategoryChange = (e) => {
		dispatch(setCategory(e.target.id));
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
								<span>{categoryCount[element]}</span>
								{element}
							</div>
						);
					})}
				</div>
			</div>
			<div className='footer-actions'>
				{actions.map((element) => (
					<div key={element} className='footer-action'>
						{element}
					</div>
				))}
			</div>
		</div>
	);
};
