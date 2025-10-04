import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const authContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    alert("Logged out successfully");
  };

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/auth/verify",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          setUser(response.data.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.log(error);
      }
    };
    verifyUser();
  }, []);
  return (
    <authContext.Provider value={{ user, login, logout }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
