import './button_module.scss';

export const Button = ({ content, clickHandler, className }) => {
	return (
		<button onClick={clickHandler} className={`btn_default ${className}`}>
			{content}
		</button>
	);
};
