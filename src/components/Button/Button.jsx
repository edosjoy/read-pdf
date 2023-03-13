import './Button.css';

const Button = ({openPdfDocument}) => {
	return (
		<div className="button-wrapper__container">
			<button className="button" onClick={openPdfDocument}>Open PDF File</button>
		</div>
	);
};

export default Button;
