import { createContext, useContext, useState, useEffect } from "react";
import apiClient from "../api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null = not logged in
  const [isLoading, setIsLoading] = useState(true); // track loading state

  // Fetch current user on mount (session persistence)
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await apiClient.get("/api/user/me");
        if (response.data.success && response.data.user) {
          setUser(response.data.user);
        }
      } catch (err) {
        // Not authenticated or error - user stays null
        if (process.env.NODE_ENV !== 'production') {
          console.log("Not authenticated or session expired");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrentUser();
  }, []);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => useContext(AuthContext);
