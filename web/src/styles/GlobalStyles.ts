import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--color-neutral-1000);
  }
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    height: 100%;
    width: 100%; 
  }
  
  button, input, a {
    text-decoration: none;
  }
  img {
    pointer-events: none;
  }
  
  *,
  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  *, button, input {
    outline: 0;
    border: 0;
    box-shadow: none;
    background: none;
    font-family: 'Comfortaa', 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    -webkit-appearance: none;
  }

  button {
    cursor: pointer;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 1.2rem;
    height: 0.8rem;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 0.6rem;
    background: var(--color-neutral-200);     
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 0.6rem;
    background-color: var(--color-neutral-400); 
    &:hover {
      background-color: var(--color-neutral-500);  
    }
  }
  /* Change Autocomplete styles in Chrome*/
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: var(--color-neutral-500);
    box-shadow: 0 0 0px 1000px var(--color-neutral-200) inset;
    -webkit-box-shadow: 0 0 0px 1000px var(--color-neutral-200) inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  html {
    background: var(--color-neutral-100);
  }
  
  @keyframes click{
    0% {
      opacity: 1;   
    }
    20% {
      opacity: 0.6;   
    }
    100% {
      opacity: 1;   
    }
  }

  @keyframes button-click{
    0% {
      opacity: 1;   
    }
    20% {
      opacity: 0.8;   
    }
    100% {
      opacity: 1;   
    }
  }

  :root {
    ${props => {
      const theme = props.theme;
      let append = '';
      Object.entries(theme).forEach(([prop, value]) => {
        append += `--${prop}: ${value};`;
      });
      return append;
    }}
    --border: 0.8rem;
    --border-sm: 0.4rem;
    --border-md: 0.8rem;
    --border-lg: 1.6rem;
    font-size: 60%;
    
    @media (min-width: 700px) {
      font-size: 62.5%;
    }
  }
`;