import { Navigator } from '../Navigator/Navigator';
import { Search } from '../Search/Search';
import { ItemList } from '../ItemList/ItemList';
import { ActionSelection } from '../ActionSelection/ActionSelection';
import { Switcher } from '../Switcher/Switcher';
import { useParams } from 'react-router-dom';
import { getSwitchers } from '../../store/selectors';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { PageNotFound } from '../PageNotFound/PageNotFound';

export const InfoTable = () => {
	const { id } = useParams();
	const switchers = useSelector(getSwitchers).keys;
	const pageIsExist = _.includes(switchers, id);

	return (
		<div className='wrapper'>
			{pageIsExist ? (
				<>
					<Switcher />
					<div className='info-table'>
						<div className='header'>
							<Navigator />
							<Search />
						</div>
						<ItemList />
						<ActionSelection />
					</div>
				</>
			) : (
				<PageNotFound />
			)}
		</div>
	);
};
