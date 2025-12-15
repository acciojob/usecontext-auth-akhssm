import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const toggleAuth = () => {
    setAuthenticated(prev => !prev);
  };

  return (
    <AuthContext.Provider value={{ authenticated, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const Auth = () => {
  const { authenticated, toggleAuth } = useContext(AuthContext);

  return (
    <div>
      <h1>Click on the checkbox to get authenticated</h1>

      <p className="authText">
        {authenticated
          ? "You are now authenticated, you can proceed"
          : "you are not authenticated"}
      </p>

      <label>
        <input
          type="checkbox"
          checked={authenticated}
          onChange={toggleAuth}
        />
        I'm not a robot
      </label>
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Auth />
    </AuthProvider>
  );
};

export default App;
