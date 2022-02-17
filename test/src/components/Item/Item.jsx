// import { useDispatch, useSelector } from 'react-redux';
import // setCategoryStatus,
// setStatusForAllItems,
'../../store/actionCreators';
import { Checkbox } from '../Common/Components/Checkbox/Checkbox';
import './item_module.scss';

export const Item = ({ name, description, allowed, blocked, isDisabled }) => {
	// const allList = useSelector((store) => store.list);
	// const dispatch = useDispatch();

	const handleInputChange = (name) => {
		// const checkBoxName = e.target.nextSibling.innerText.toLowerCase();
		// allList.forEach((element) => {
		// 	if (element.name.toLowerCase() === checkBoxName) {
		// 		element.allowed = !element.allowed;
		// 		if (element.blocked) {
		// 			element.custom = true;
		// 			element.blocked = !element.blocked;
		// 		}
		// 		dispatch(setStatusForAllItems(''));
		// 	}
		// });
		// dispatch(setCategoryStatus(allList));
		// console.log(name);
		// console.log(name);
	};

	return (
		<div className={`items__item ${isDisabled ? 'items__item_disabled' : ''}`}>
			{/* <input
				type='checkbox'
				checked={allowed ? true : false}
				onChange={handleInputChange}
			/> */}

			<label className='items__item__title'>
				<Checkbox type='checkbox' onChange={() => handleInputChange(name)} />
				<i className='fa fa-light fa-ban'></i>
				<i className='fa fa-duotone fa-check'></i>

				{name}
			</label>
			<div className='items__item__container'>
				<i className='fa fa-exclamation-circle'></i>
				<div className='items__item__description'>{description}</div>
			</div>
		</div>
	);
};
