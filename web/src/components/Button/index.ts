import styled, {css} from 'styled-components';

interface ButtonProps {
  outlined?: boolean;
}

const disabledCSS = css`
  cursor: unset;
  background: var(--color-primary-disabled);
  color: var(--color-text-in-primary);
  border-color: var(--color-primary-disabled);
  > svg {
    stroke: var(--color-text-in-primary);
  }
`;
const disabledOutlineCSS = css`
  background: transparent;
  color: var(--color-primary-disabled);
  > svg {
    stroke: var(--color-primary-disabled);
  }
`; 

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center; 
  justify-content: center;
  background: ${ props => props.outlined ? 'transparent' : 'var(--color-primary)'};
  color: ${ props => props.outlined ? 'var(--color-primary)' : 'var(--color-text-in-primary)'};
  border: ${ props => props.outlined ? '0.2rem solid var(--color-primary)' : 'none'};
  
  padding: 1.6rem;
  border-radius: var(--border);
  font-weight: 500;
  font-size: 1.6rem;
  
  transition: 0.2s;
  cursor: pointer;
  outline: 0;
  > svg {
    stroke: ${ props => props.outlined ? 'var(--color-primary)' : 'var(--color-text-in-primary)'};
  }
  &:hover {
    background: ${ props => props.outlined ? 'var(--color-primary)' : 'var(--color-primary-hover)'};
    color: var(--color-text-in-primary);
    > svg {
      stroke: var(--color-text-in-primary);
    }
    ${ props => props.disabled && disabledCSS }
    ${ props => props.disabled && props.outlined && disabledOutlineCSS }
  }
  ${ props => props.disabled && disabledCSS }
  ${ props => props.disabled && props.outlined && disabledOutlineCSS }
  &:active {
    animation: button-click;
    animation-duration: 0.3s;
  }
  
  &.danger {
    background: ${ props => props.outlined ? 'transparent' : 'var(--color-danger)'};
    color: ${ props => props.outlined ? 'var(--color-danger)' : 'var(--color-text-in-primary)'};
    border: ${ props => props.outlined ? '0.2rem solid var(--color-danger)' : 'none'};
    
    > svg {
      stroke: ${ props => props.outlined ? 'var(--color-danger)' : 'var(--color-text-in-primary)'};
    }
    
    &:hover {
      background: ${ props => props.outlined ? 'var(--color-danger)' : 'var(--color-danger-dark)'};
      color: var(--color-text-in-primary);
      > svg {
        stroke: var(--color-text-in-primary);
      }
      ${ props => props.disabled && disabledCSS }
      ${ props => props.disabled && props.outlined && disabledOutlineCSS }
    }
  }
  
  &.success {
    background: ${ props => props.outlined ? 'transparent' : 'var(--color-success)'};
    color: ${ props => props.outlined ? 'var(--color-success)' : 'var(--color-text-in-primary)'};
    border: ${ props => props.outlined ? '0.2rem solid var(--color-success)' : 'none'};
    
    > svg {
      stroke: ${ props => props.outlined ? 'var(--color-success)' : 'var(--color-text-in-primary)'};
    }
    
    &:hover {
      background: ${ props => props.outlined ? 'var(--color-success)' : 'var(--color-success-dark)'};
      color: var(--color-text-in-primary);
      > svg {
        stroke: var(--color-text-in-primary);
      }
      ${ props => props.disabled && disabledCSS }
      ${ props => props.disabled && props.outlined && disabledOutlineCSS }
    }
  }
  
  &.cancel {
    background: transparent;
    color: ${ props => props.outlined ? 'var(--color-outline-dark)' : 'var(--color-primary)'};
    border: ${ props => props.outlined ? '0.2rem solid var(--color-outline-dark)' : 'none'};
    
    > svg {
      stroke: ${ props => props.outlined ? 'var(--color-outline-dark)' : 'var(--color-outline-dark)'};
    }
    
    &:hover {
      background: ${ props => props.outlined ? 'var(--color-outline-dark)' : 'var(--color-white-hover)'};
      color: ${ props => props.outlined ? 'var(--color-text-in-primary)' : 'var(--color-primary-dark)'};
      > svg {
        stroke: var(--color-text-in-primary);
      }
      ${ props => props.disabled && disabledCSS }
      ${ props => props.disabled && props.outlined && disabledOutlineCSS }
    }
  }
  &.no-border, &.no-border:hover {
    border: none;
  }
`;

export default Button;