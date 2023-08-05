import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(""); // Add userRole state

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if (storedLoginStatus) {
      setIsLoggedIn(true);
      const storedUserRole = localStorage.getItem('userRole');
      setUserRole(storedUserRole);
    }
  }, []);

  const login = (role) => { // Accept role parameter
    setIsLoggedIn(true);
    setUserRole(role);
    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('userRole', role); // Store user role
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserRole("");
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
