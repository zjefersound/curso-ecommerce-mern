import styled from 'styled-components';
import { FiPlus, FiX} from 'react-icons/fi';

export const Container = styled.div`
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
  > div {
    display: grid;
    grid-template-columns: 1fr 4fr;
    column-gap: 2.4rem;
  }
`;

export const Sidebar = styled.div`
  background: var(--color-neutral-300);
  padding: 2.4rem;
  border-radius: 2.4rem;
  > ul li {
    list-style: none;
    > button {
      height: 3.2rem;
      display: flex;
      align-items: center;
      

      &:hover {
        background: var(--color-neutral-300);
      }

      &.active {
        color: var(--color-primary-light) !important;
        font-weight: 700;
      }
    }
  }
`;

export const Panel = styled.div`
  > header {
    border-radius: 2.4rem;
    background: var(--color-neutral-300);
    height: 5.6rem;
    padding: 0 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > h3 {
      font-size: 2rem;
    }
  }

  > header ul li {
    list-style: none;
    > button {
      display: flex;
      align-items: center;
      font-size: 1.4rem;
      column-gap: 0.8rem;
      &:hover {
        transition: 0.2s;
        opacity: 0.8;
      }
    }
  }

  > section {
    position: relative;
    
    background: var(--color-neutral-300);

    margin-top: 2.4rem;
    border-radius: 2.4rem;
    padding: 2.4rem;
    
    display: flex;
    justify-content: space-between;
    
    width: 100%;
    max-height: 40rem;
    overflow-y: auto;

    transition: all 0.3s;
    column-gap: 2.4rem;
  }
`;

export const AddIcon = styled(FiPlus)`
  height: 2.4rem;
  width: 2.4rem;
`;
export const CrossIcon = styled(FiX)`
  height: 2.4rem;
  width: 2.4rem;
`;
