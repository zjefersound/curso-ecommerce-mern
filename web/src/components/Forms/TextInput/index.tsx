import React, { InputHTMLAttributes, useContext } from 'react';

import { 
  Container,
  Input,
  InputBlock,
  InputIcon,
  Prefix,
} from './styles';

import { ThemeContext } from '../../../contexts/ThemeContext';
import ErrorMessage from '../ErrorMessage';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  smaller?: boolean;
  mask?: "cep" | "currency" | "phone" | "cnpj";
  prefix?: string;
}

const TextInput: React.FC<InputProps> = ({
  errorMessage,
  children, 
  label, 
  smaller,
  mask,
  prefix,
  ...rest
}) => {
  const { themeName } = useContext(ThemeContext);

  return (
    <Container className={errorMessage ? 'error': ''}>
      <InputBlock 
        className={`
          ${smaller ? 'smaller ' : ''}
          ${errorMessage? 'error': ''}
        `}
      >
        {children && (
          <InputIcon className={`${smaller? 'smaller': ''}`}>
            {children}
          </InputIcon>
        )}
        {prefix && (
          <Prefix className={`${children ? 'icon-input' : ''}`}>
            {prefix}
          </Prefix>
        )}
        <Input 
          {...rest} 
          className={`
            ${children ? 'icon-input': ''} 
            ${prefix ? 'prefix': ''} 
            ${themeName === 'dark'? 'dark-theme': ''}
          `}
        />
      </InputBlock>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
}

export default TextInput;