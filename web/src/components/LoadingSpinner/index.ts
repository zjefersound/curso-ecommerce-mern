import styled, {keyframes} from 'styled-components';

const spin = keyframes`
  0%{
      transform: rotate(0deg);
  }
  100%{
      transform: rotate(360deg);
  }
`;

const Loading = styled.div`
  width: 6rem;
  height: 6rem;
  border: 0.3rem solid  var(--color-primary-light);
  border-radius: 50%;
  border-top: 3px solid  var(--color-primary);
  animation: ${spin} 1.5s linear infinite;
  -webkit-animation: ${spin} 1.5s linear infinite;
`;

export default Loading;