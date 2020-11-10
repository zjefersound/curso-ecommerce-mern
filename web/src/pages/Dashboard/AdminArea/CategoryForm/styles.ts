import styled from 'styled-components';

import { FiTrash } from 'react-icons/fi';

export const Container = styled.form`
  position: sticky;
  top: 0rem;
  display: flex;
  row-gap: 1.2rem;
  flex-direction: column;
  min-width: 20rem;
`;

export const DeleteButton = styled.button`
  color: var(--color-danger);
  font-size: 1.4rem;

  &:hover {
    opacity: 0.8;
  }
`;

export const TrashIcon = styled(FiTrash)`
  stroke: var(--color-danger);
  margin-right: 0.8rem;
`;