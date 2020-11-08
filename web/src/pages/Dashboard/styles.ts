import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  > div {
    display: grid;
    column-gap: 2.4rem;
    &:nth-child(1) {
      grid-template-columns: 1fr 3fr;
    }
  }
  > div + div {
    margin-top: 2.4rem;
  }
`;

const cardCSS = css`
  padding: 2.4rem;
  background: var(--color-neutral-200);
  display: flex;
  flex-direction: column;
  border-radius: var(--border-lg);
  box-shadow: 0 0 1.6rem var(--color-shadow);

  > h2 {
    padding-bottom: 1.2rem;
    margin-bottom: 1.2rem;
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-primary);
    border-bottom: 0.1rem solid var(--color-neutral-400);
  }
`;


export const UserCard = styled.div`
  ${cardCSS}
  
  > span {
    font-size: 1.4rem;
    &.name {
      font-size: 1.6rem;
    }
    &.email {
      color: var(--color-neutral-800);
    }
    &.role {
      color: var(--color-secondary);
    }
  }

  > span + span {
    margin-top: 1.2rem;
  }
`;

export const UserLinkCard = styled.div`
  ${cardCSS}
  > ul li {
    list-style: none;
    font-size: 1.4rem;
    
    > a {
      display: flex;
      padding: 1.6rem 1.2rem;
      color: var(--color-secondary);
      border-radius: var(--border-lg);
      
      transition: 0.3s;
      
      &:hover {
        background: var(--color-neutral-300);
      }
    }
  }
`;

export const HistoryCard = styled.div`
  ${cardCSS}
  
`;
