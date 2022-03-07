import _ from 'lodash';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getSwitchers } from '../../store/selectors';
import './switcher_module.scss';

export const Switcher = () => {
	const switchers = useSelector(getSwitchers);

	return (
		<div className='switcher'>
			{_.map(switchers.keys, (id) => {
				return (
					<NavLink key={id} to={`/group/${id}`} className='switcher__item'>
						<div className='switcher__item__label'>
							{switchers.object[id].label}
						</div>
						<div className='switcher__item__description'>
							{switchers.object[id].description}
						</div>
					</NavLink>
				);
			})}
		</div>
	);
};
