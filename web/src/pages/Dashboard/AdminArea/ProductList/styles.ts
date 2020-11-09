import styled from 'styled-components';

import { FiEdit2 } from 'react-icons/fi';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  > li {
    width: 100%;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 6.4rem 1fr 6rem 8rem 2rem;
    height: 4rem;
    padding: 0.4rem 1.6rem;

    font-size: 1.4rem;
    border-bottom: 0.1rem solid var(--color-neutral-500);

    &.header {
      font-weight: 700;
      background: var(--color-neutral-500);
    }
  }
`;

export const EditIcon = styled(FiEdit2)`
  height: 2rem;
  width: 2rem;
  
  &:hover {
    opacity: 0.8;
  }
`;