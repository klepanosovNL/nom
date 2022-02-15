import { useDispatch, useSelector } from 'react-redux';
import {
	setCategoryStatus,
	setStatusForAllItems,
} from '../../store/actionCreators';
import './item_module.scss';

export const Item = ({ name, description, allowed, blocked }) => {
	const allList = useSelector((store) => store.list);
	const dispatch = useDispatch();

	const handleInputChange = (e) => {
		const checkBoxName = e.target.nextSibling.innerText.toLowerCase();

		allList.forEach((element) => {
			if (element.name.toLowerCase() === checkBoxName) {
				element.allowed = !element.allowed;

				if (element.blocked) {
					element.custom = true;
					element.blocked = !element.blocked;
				}

				dispatch(setStatusForAllItems(''));
			}
		});

		dispatch(setCategoryStatus(allList));
	};

	return (
		<div className={`items__item ${blocked ? 'items__item_disabled' : ''}`}>
			<input
				type='checkbox'
				checked={allowed ? true : false}
				onChange={handleInputChange}
			/>
			<div className='items__item__title'>{name}</div>
			<div className='items__item__container'>
				<i className='fa fa-exclamation-circle'></i>
				<div className='items__item__description'>{description}</div>
			</div>
		</div>
	);
};
