import styled from 'styled-components';

const DivButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 10%;
	@media (max-width: 500px) {
		width: 20%;
	}
`;

const ButtonItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	border: 1px solid hsl(233, 14%, 35%);
	background: transparent;
	cursor: pointer;
	transition: 0.3s;
	background-image: ${props =>
		props.status
			? 'linear-gradient(to right,hsl(192, 100%, 67%),hsl(280, 87%, 65%))'
			: 'none'};
	&:hover {
		transform: scale(1.1);
	}
`;

const Button = ({ children, onClick, complete }) => {
	return (
		<DivButton>
			<ButtonItem status={complete} onClick={onClick}>
				{children}
			</ButtonItem>
		</DivButton>
	);
};

export default Button;
