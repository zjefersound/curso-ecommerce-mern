import styled from 'styled-components';

import { FiUpload, FiPlus } from 'react-icons/fi';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  
  cursor: pointer;
  transition: all 0.3s;

  display: flex;
  align-items: center;
  justify-content: center;
  
  background: var(--color-neutral-200);
  border: 0.1rem solid transparent;
  border-radius: var(--border);

  > p {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
    color: #FFF;
    font-size: 1.4rem;

    max-width: 90%;
    > svg {
      stroke: #FFF;
      height: 4.8rem;
      width: 4.8rem;
      margin-bottom: 0.8rem;
    }
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover{
    background: var(--color-neutral-500);
  }
  &.error {
    border: 0.1rem solid var(--color-danger);
  }
`;

export const PlusIcon = styled(FiPlus)``;
export const UploadIcon = styled(FiUpload)``;