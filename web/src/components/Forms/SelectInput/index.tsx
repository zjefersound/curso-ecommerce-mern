import React from 'react';
import Select, { StylesConfig, Props } from 'react-select';
import ErrorMessage from '../ErrorMessage';

export interface OptionProps {
  value: any;
  label: string;
}

interface SelectInputProps extends Props {
  errorMessage?: string;
}
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '0.1rem solid var(--color-neutral-500)',
    height: '6rem',
    display: "flex",
    alignItems: 'center',
    padding: '0 1.6rem',
    color: state.isSelected ? 'var(--color-primary)' : 'var(--color-text-input)',
    fontSize: '1.6rem',
    background: state.isSelected ? 'var(--color-neutral-200)' : 'var(--color-neutral-100)',
    
    ':active': {
      color: 'var(--color-text-in-primary)',
      background: 'var(--color-primary)',
    }

  }),
  control: (provided, state) => ({
    ...provided,
    height: '6rem',
    width: '100%',
    border: !state.isFocused ? '0.1rem solid var(--color-neutral-500)' : '0.1rem solid var(--color-primary-light)',
    borderRadius: 'var(--border)',
    color: state.isDisabled
      ? 'var(--color-neutral-100)'
      : state.isFocused
      ? 'var(--color-neutral-100)'
      : 'inherit',
    fontSize: '1.6rem',
    background: state.isFocused 
      ? 'var(--color-neutral-100)' 
      : 'var(--color-neutral-200)',
    boxShadow: 'none',
    transition: '0.1s',
    ':hover': {
      border: state.isFocused ? '0.1rem solid var(--color-primary-light)' : '0.1rem solid var(--color-neutral-500)'
    },
    'div': {
      color: 'var(--color-neutral-800)',
    },

  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    
    return { ...provided, opacity, transition };
  },
  menuPortal: (provided) => ({
    ...provided, 
    zIndex: 999,
  })
  
} as StylesConfig;

const SelectInput: React.FC<SelectInputProps> = ({errorMessage, ...props}) => {
  return (
    <>
      <Select 
        styles={customStyles}
        menuPortalTarget={document.body}
        {...props}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
}

export default SelectInput;