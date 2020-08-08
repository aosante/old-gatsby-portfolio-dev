import styled, {keyframes} from 'styled-components';

const wave = keyframes`
  to {
    transform: translateX(-100%);
  }
`

export const Wrapper = styled.footer`
  width: 100%;
  position: relative;
  bottom: 0px;
  .fill {
    background-color: #f7b5d7;
    position: absolute;
    width: 100%;
    border: 2px solid red;
    padding: 2em 0;
    transform: translateY(-60px);
    display: flex;
    align-items: center;
  }
  svg {
    width: 100%;
  }
  .wave {
    animation: ${wave} 3s linear;
    animation-iteration-count: infinite;
    fill: #f7b5d7;
  }
  #wave2 {
    animation-duration: 5s;
    animation-direction: reverse;
    opacity: 0.6;
  }
  #wave3 {
    animation-duration: 7s;
    opacity: 0.3;
  }
`;

export const Links = styled.div`
  border: 2px solid black;
  width: 8%;
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  img {
    margin: 0;
    width: 40px;
    color: red;
  }
  @media (max-width: 960px) {
    width: 16%;
  }
  @media (max-width: 680px) {
    width: 25%;
  }
`


