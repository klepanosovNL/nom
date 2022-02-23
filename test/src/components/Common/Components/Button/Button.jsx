import './button_module.scss';

export const Button = ({ children, className = '', ...rest }) => {
	return (
		<button className={`btn_default ${className}`} {...rest}>
			{children}
		</button>
	);
};
