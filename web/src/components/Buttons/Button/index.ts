import styled, {css} from 'styled-components';

interface ButtonProps {
  outlined?: boolean;
}

const disabledCSS = css`
  cursor: unset;
  background: var(--primary-disabled);
  color: var(--text-in-primary);
  border-color: var(--primary-disabled);
  > svg {
    stroke: var(--text-in-primary);
  }
`;
const disabledOutlineCSS = css`
  background: transparent;
  color: var(--primary-disabled);
  > svg {
    stroke: var(--primary-disabled);
  }
`; 

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center; 
  justify-content: center;
  background: ${ props => props.outlined ? 'transparent' : 'var(--primary)'};
  color: ${ props => props.outlined ? 'var(--primary)' : 'var(--text-in-primary)'};
  border: ${ props => props.outlined ? '0.2rem solid var(--primary)' : 'none'};
  
  padding: 1.6rem;
  border-radius: var(--border);
  font-weight: 500;
  font-size: 1.6rem;
  
  transition: 0.2s;
  cursor: pointer;
  outline: 0;
  > svg {
    stroke: ${ props => props.outlined ? 'var(--primary)' : 'var(--text-in-primary)'};
  }
  &:hover {
    background: ${ props => props.outlined ? 'var(--primary)' : 'var(--primary-hover)'};
    color: var(--text-in-primary);
    > svg {
      stroke: var(--text-in-primary);
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
    background: ${ props => props.outlined ? 'transparent' : 'var(--danger)'};
    color: ${ props => props.outlined ? 'var(--danger)' : 'var(--text-in-primary)'};
    border: ${ props => props.outlined ? '0.2rem solid var(--danger)' : 'none'};
    
    > svg {
      stroke: ${ props => props.outlined ? 'var(--danger)' : 'var(--text-in-primary)'};
    }
    
    &:hover {
      background: ${ props => props.outlined ? 'var(--danger)' : 'var(--danger-dark)'};
      color: var(--text-in-primary);
      > svg {
        stroke: var(--text-in-primary);
      }
      ${ props => props.disabled && disabledCSS }
      ${ props => props.disabled && props.outlined && disabledOutlineCSS }
    }
  }
  
  &.success {
    background: ${ props => props.outlined ? 'transparent' : 'var(--success)'};
    color: ${ props => props.outlined ? 'var(--success)' : 'var(--text-in-primary)'};
    border: ${ props => props.outlined ? '0.2rem solid var(--success)' : 'none'};
    
    > svg {
      stroke: ${ props => props.outlined ? 'var(--success)' : 'var(--text-in-primary)'};
    }
    
    &:hover {
      background: ${ props => props.outlined ? 'var(--success)' : 'var(--success-dark)'};
      color: var(--text-in-primary);
      > svg {
        stroke: var(--text-in-primary);
      }
      ${ props => props.disabled && disabledCSS }
      ${ props => props.disabled && props.outlined && disabledOutlineCSS }
    }
  }
  
  &.cancel {
    background: transparent;
    color: ${ props => props.outlined ? 'var(--outline-dark)' : 'var(--primary)'};
    border: ${ props => props.outlined ? '0.2rem solid var(--outline-dark)' : 'none'};
    
    > svg {
      stroke: ${ props => props.outlined ? 'var(--outline-dark)' : 'var(--outline-dark)'};
    }
    
    &:hover {
      background: ${ props => props.outlined ? 'var(--outline-dark)' : 'var(--white-hover)'};
      color: ${ props => props.outlined ? 'var(--text-in-primary)' : 'var(--primary-dark)'};
      > svg {
        stroke: var(--text-in-primary);
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