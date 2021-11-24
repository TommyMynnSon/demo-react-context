import { createContext, useState } from "react";

export const authContext = createContext();

export default function AuthProvider(props) {

  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);

  // Perform some login process for the user
  const login = function(email, password) {
    setAuth(true);
    const id = "1234-1234-1234";
    setUser({ email, id, name: "Test User" });
  };

  const logout = function() {
    setAuth(false);
    setUser(null);
  };

  const data = { auth, user, login, logout };

  return (
    <authContext.Provider value={data}>
      {props.children}
    </authContext.Provider>
  );

};