import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../store/actionCreators';

export const Item = ({ name, description, allowed }) => {
	const allList = useSelector((store) => store.list);
	const dispatch = useDispatch();

	const handleInputChange = (e) => {
		const checkBoxName = e.target.nextSibling.innerText.toLowerCase();

		//TODO debug
		allList.map((element) => {
			if (element.name.toLowerCase() === checkBoxName)
				element.allowed = !element.allowed;

			return element;
		});

		dispatch(setCategory(allList));
	};

	return (
		<div className='items_item'>
			<input
				type='checkbox'
				checked={allowed ? true : false}
				onChange={handleInputChange}
			/>
			<div className='items_item-title'>{name}</div>
			<div className='items_item-container'>
				<i className='fa fa-exclamation-circle'></i>
				<div className='items_item-container_description'>{description}</div>
			</div>
		</div>
	);
};
