import styled from 'styled-components';

export const Container = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 7.2rem;
  
  background: var(--color-neutral-200);
  padding: 2.4rem;
  
  z-index: 10;

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    width: 100%;
    max-width: 128rem;

    column-gap: 1.6rem;

    > li {
      display: flex;
      list-style: none;
      font-size: 1.4rem;
      &.active a {
        color: var(--color-primary);
      }
    }
  }
`;

export const LogoutButton = styled.button`
  cursor: pointer;
  color: var(--color-danger);
`;