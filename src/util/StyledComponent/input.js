import styled from 'styled-components';
export const Input = styled.input`
	width: ${(props) => props.width || '350px'};
	height: ${(props) => props.height || '30px'};
	background: rgba(139, 195, 74, 0.2);
	border: None;
	padding: 10px;
	@media (max-width: 500px) {
		width: 260px;
	}
`;
