import { useDispatch, useSelector } from 'react-redux';
import { setCategoryStatus } from '../../store/actionCreators';

export const Item = ({ name, description, allowed, blocked }) => {
	const allList = useSelector((store) => store.list);
	const dispatch = useDispatch();

	const handleInputChange = (e) => {
		const checkBoxName = e.target.nextSibling.innerText.toLowerCase();

		allList.forEach((element) => {
			if (element.name.toLowerCase() === checkBoxName)
				element.allowed = !element.allowed;
		});

		dispatch(setCategoryStatus(allList));
	};

	return (
		<div className='items_item'>
			<input
				type='checkbox'
				checked={allowed ? true : false}
				onChange={handleInputChange}
				disabled={blocked ? true : false}
			/>
			<div className='items_item-title'>{name}</div>
			<div className='items_item-container'>
				<i className='fa fa-exclamation-circle'></i>
				<div className='items_item-container_description'>{description}</div>
			</div>
		</div>
	);
};
