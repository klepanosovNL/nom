import { NavLink } from 'react-router-dom';

export const PageNotFound = () => {
	return (
		<>
			<div>
				<h1>Sorry...</h1>
				<h2>Nothing to show</h2>
				<NavLink to='/'>go home, yankee</NavLink>
			</div>
		</>
	);
};
