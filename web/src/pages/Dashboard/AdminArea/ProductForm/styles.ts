import styled from 'styled-components';

import { FiTrash } from 'react-icons/fi';

export const Container = styled.form`
  display: flex;
  row-gap: 1.2rem;
  flex-direction: column;
  width: 100%;

  > fieldset {
    display: flex;
    gap: 1.6rem;
  }
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

export const ImageContainer = styled.div`
  height: 24rem;
  width: 24rem;
  display: flex;
  flex-shrink: 0;
`;

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.6rem;
`;
