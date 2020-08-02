import styled from 'styled-components';

export const Wrapper = styled.div`
 min-width: 305px;
 display: flex;
 justify-content: space-between;
  a {
    color: #8892b0;
	text-decoration: none;
	font-size: 17pt;
	transition: all 0.05s ease-in;
	border: 3px solid transparent;
	padding: 3px 0px;
	border-radius: 10px;
	&:hover {
		color: #0a1928;
		transform: scale(1.015);
	}
	&:before, &:after {
		content: "";
		display: block;
	}
	&:after {
		position:absolute;
		left:50%;
		bottom: -10%;
		width:0%;
		height:3px;
		background-color:#ff0a78;
		transform:translateX( -50% );
		-webkit-transition:all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
		-o-transition:all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
		transition:all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
	}
	&:before {
		position:absolute;
		left:50%;
		top:-10%;
		width:0%;
		height:3px;
		background-color:#ff0a78;
		transform:translateX( -50% );
		-webkit-transition:all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
		-o-transition:all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55); 
		transition:all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
	}
	&:hover:after, &:hover:before {
		width: 100%;
	}
	@media (max-width: 960px) {
		display: none;
	}
  }
`;
