import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [credentials, setCredentials] = useState(
    JSON.parse(localStorage.getItem("userInfo")) || null
  );

  useEffect(() => {
    try {
      localStorage.setItem("credentials", JSON.stringify(credentials));
    } catch (error) {
      localStorage.removeItem("credentials");
    }
  }, [credentials]);

  const contextValue = {
    credentials,
    login(credentials) {
        setCredentials(credentials);
    },
    logout() {
        setCredentials(null);
    },
    isLogged() {
      return !!credentials;
    },
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;