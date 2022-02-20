import './button_module.scss';

export const Button = ({ children, clickHandler, className = '' }) => {
	return (
		<button onClick={clickHandler} className={`btn_default ${className}`}>
			{children}
		</button>
	);
};
