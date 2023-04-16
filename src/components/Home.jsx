import React, { useContext } from "react";
import { AuthContext } from "./Provider/AuthProviders";

const Home = () => {
  const user = useContext(AuthContext);
  return (
    <div className="text-2lg text-4xl">
      <h1>This is a home section { user && <span>{user.displayName}</span>}</h1>
    </div>
  );
};

export default Home;
