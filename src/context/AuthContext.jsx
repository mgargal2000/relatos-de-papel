import { createContext, useContext, useEffect, useState } from "react";
import { mockUser } from "../data/user";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("relatosUser");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email, password) => {
    if (email === mockUser.email && password === mockUser.password) {
      const userWithoutPassword = {
        id: mockUser.id,
        name: mockUser.name,
        email: mockUser.email,
        avatar: mockUser.avatar,
      };

      setUser(userWithoutPassword);
      localStorage.setItem("relatosUser", JSON.stringify(userWithoutPassword));

      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("relatosUser");
  };

  const isAuthenticated = Boolean(user);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}