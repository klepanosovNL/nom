export const Input = ({
	type,
	className,
	placeholder,
	onChange,
	onFocus,
	onClick,
	value,
}) => {
	return (
		<input
			type={type}
			className={className}
			placeholder={placeholder || ''}
			onChange={onChange}
			onFocus={onFocus}
			onClick={onClick}
			value={value || ''}
		/>
	);
};
