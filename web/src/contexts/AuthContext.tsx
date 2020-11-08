import React, { createContext } from "react";
import useAuth, { AuthProviderProps } from "../hooks/useAuth";

const AuthContext = createContext<AuthProviderProps>({
  loading: true,
  handleLogin: () => { },
  handleLogout: () => { },
  loginErrorMessage: ''
});


const AuthProvider: React.FC = ({ children }) => {
  const { loading, authenticated, handleLogin, handleLogout, loginErrorMessage } = useAuth();

  return (
    <AuthContext.Provider value={{ 
      loading, 
      authenticated, 
      handleLogin, 
      handleLogout, 
      loginErrorMessage
    }}>
      {loading
        ? <div>loading...</div>
        : children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };