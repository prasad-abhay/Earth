import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(undefined);
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // load user on refresh
  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  const login = async (email, password, role) => {
    try {
      setIsLoading(true);

      const res = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
      });

      const data = await res.json();

      //  invalid user / wrong password
      if (!res.ok) {
        alert(data.message || "Login failed");
        return;
      }

      // ✅ success
      const userWithAvatar = {
        ...data.user,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.user.email}`,
      };

      setUser(userWithAvatar);
      localStorage.setItem("user", JSON.stringify(userWithAvatar));

      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: "Server error. Try again later.",
      };
    } finally {
      setIsLoading(false);
    }
  };

  // logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};