import styled from 'styled-components';

const WrapperItem = styled.div`
	position: relative;
	background-image: url(${props => props.theme.logo});
	background-size: 100% 35vh;
	background-repeat: no-repeat;
	top: 0;
	left: 0;
	min-height: 100vh;
	background-color: ${props => props.theme.background};
`;

const Wrapper = ({ children }) => {
	return <WrapperItem>{children}</WrapperItem>;
};
export default Wrapper;
