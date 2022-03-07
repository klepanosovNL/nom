import { Navigator } from '../Navigator/Navigator';
import { Search } from '../Search/Search';
import { ItemList } from '../ItemList/ItemList';
import { ActionSelection } from '../ActionSelection/ActionSelection';
import { Switcher } from '../Switcher/Switcher';

export const InfoTable = () => {
	return (
		<div className='wrapper'>
			<Switcher />
			<div className='info-table'>
				<div className='header'>
					<Navigator />
					<Search />
				</div>
				<ItemList />
				<ActionSelection />
			</div>
		</div>
	);
};
