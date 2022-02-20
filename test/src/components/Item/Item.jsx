import { useDispatch } from 'react-redux';
import { checkBoxToggle } from '../../store/actionCreators';
import { Checkbox } from '../Common/Components/Checkbox/Checkbox';
import './item_module.scss';

export const Item = ({ name, description, isDisabled }) => {
	const dispatch = useDispatch();

	const handleInputChange = (name) => {
		dispatch(checkBoxToggle(name));
	};

	return (
		<div className={`items__item`}>
			<label className='items__item__title'>
				<Checkbox type='checkbox' onChange={() => handleInputChange(name)} />
				<i
					className={`fa ${
						isDisabled ? 'fa-light fa-ban' : 'fa-duotone fa-check'
					}`}
				></i>
				{name}
			</label>
			<div className='items__item__container'>
				<i className='fa fa-exclamation-circle'></i>
				<div className='items__item__description'>{description}</div>
			</div>
		</div>
	);
};
