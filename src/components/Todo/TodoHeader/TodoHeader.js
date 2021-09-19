import { useContext } from 'react';
import ThemeContext from '../../../store/theme-context';

import iconSun from './../../../assets/images/icon-sun.svg';
import iconMoon from './../../../assets/images/icon-moon.svg';

import styled from 'styled-components';

const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 15vh;
`;

const Heading = styled.h1`
	font-size: 4rem;
	letter-spacing: 15px;
	text-transform: uppercase;
	margin-left: 1em;
	transition: 0.3s;
	&:hover {
		transform: scale(1.1);
	}
	@media (max-width: 500px) {
		margin-left: 0;
	}
`;

const Button = styled.button`
	margin-right: 2em;
	border: none;
	background: transparent;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		transform: scale(1.1);
	}
	@media (max-width: 500px) {
		margin-right: 0;
	}
`;

const TodoHeader = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	const handleClick = () => {
		const themes = theme === 'dark' ? 'light' : 'dark';

		localStorage.setItem('theme', themes);
		setTheme(themes);
	};

	return (
		<Header>
			<div>
				<Heading>Todo</Heading>
			</div>
			<Button onClick={handleClick}>
				<img
					src={localStorage.getItem('theme') === 'dark' ? iconSun : iconMoon}
					alt='light theme icon'
					title='change theme'
				/>
			</Button>
		</Header>
	);
};

export default TodoHeader;
