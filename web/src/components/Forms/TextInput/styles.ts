import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const InputBlock = styled.div`
  width: 100%;
  height: 6rem;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: var(--border);
  
  background: var(--color-neutral-200);
  transition: 0.2s;
  
  > span {
    color: var(--color-neutral-500);
  }
  
  &.error{
    border-color: var(--color-danger) !important;
  }
  &:focus-within, &.not-empty {
    border: 0.1rem solid;
    background: var(--color-neutral-100);
    border-color: var(--color-primary-light); 
    > div svg {
      stroke: var(--color-primary-light);
    }
    > span {
      color: var(--color-primary-light);
    }
  }
  &.smaller {
    height: 4.8rem;
  }
  
`;

export const InputIcon = styled.div`
  height: 6rem;
  width: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  > svg {
    height: 2rem;
    width: 2rem;
    stroke: var(--color-neutral-500);
  }
  &.smaller {
    height: 4.8rem;
    width: 4.8rem;
    
    > svg {
      height: 1.6rem;
      width: 1.6rem;
    }
  }
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  
  display: flex;
  
  color: var(--color-neutral-800); 
  font-size: 1.6rem;
  font-weight: 400;
  padding: 0 1.6rem;
  &.icon-input {
    padding-left: 0rem;
  }
  
  &::placeholder {
    color: var(--color-neutral-500); 
  }
  &[type="date"]::-webkit-calendar-picker-indicator { filter: brightness(50%); }
  
  &.dark-theme{
    &[type="date"]::-webkit-calendar-picker-indicator { filter: invert(1); }
  }
`;

export const Prefix = styled.span` 
  font-size: 1.6rem;
  font-weight: 400;
  left: 1.6rem;
  margin-left: 1.6rem;
`;