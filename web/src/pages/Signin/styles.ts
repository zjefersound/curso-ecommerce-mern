import styled from 'styled-components';
import { FiAlertTriangle } from 'react-icons/fi';
export const Container = styled.div`
  min-height: calc(100vh - 7.2rem);
  width: 100%;
  max-width: 128rem;
  margin: 0 auto;
  padding: 4rem;

  display: flex;
  align-items: center;

  column-gap: 6.4rem;
  > div {
    width: 50%;
    z-index: 1;
    
    > img {
      width: 100%;
      height: auto;
      max-width: 64rem;
      max-height: 64rem;
    }

    h2 {
      font-size: 4.8rem;
      font-weight: 900;
      color: var(--color-primary);
    }

    form {
      margin-top: 2.4rem;
      display: flex;
      flex-direction: column;
      row-gap: 2.4rem;
    }
  }
  > div.bg {
    z-index: 0;
    background: var(--color-neutral-300);
    height: 100vw;
    width: 100vw;
    border-radius: 50%;
    position: fixed;
    top: 0;
    right: -50vw;
    opacity: 0.2;
  }
`;

export const ErrorPanel = styled.div`
  display: flex;
  align-items: center;

  margin-top: 2.4rem;
  color: var(--color-danger);
  font-size: 1.4rem;
  background: var(--color-neutral-400);
  padding: 2.4rem;
  border-radius: var(--border-lg);
`;

export const ErrorIcon = styled(FiAlertTriangle)`
  stroke: var(--color-danger);
  height: 2.4rem;
  width: 2.4rem;
  margin-right: 2.4rem;
`;

export const SuccessPanel = styled.div`
  background: var(--color-neutral-300);
  padding: 4rem;
  border-radius: var(--border-lg);
  display: flex;
  flex-direction: column;

  > h2 {
    font-size: 4.8rem;
    color: var(--color-success) !important;
  }

  > p {
    margin-top: 2.4rem;
    font-size: 1.4rem;
  }

  > a {
    margin-top: 2.4rem;
    font-size: 1.6rem;
    color: var(--color-success);
    text-decoration: underline;
    align-self: center;

  }
`;