import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 128rem;
  margin: 0 auto;
  padding: 2.4rem;

  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 2.8rem;
    font-weight: 500;
  }

  > span {
    margin-top: 1.2rem;
    font-size: 1.4rem;
    font-weight: 300;
    color: var(--color-neutral-700);
  }
`;
