import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div  className=''>
      <div className="navbar bg-primary h-28  text-primary-content">
        <a className="btn btn-ghost normal-case text-5xl">FIREBASE</a>
        <Link className="btn btn-ghost normal-case text-4xl"  to="/"> Home</Link>
        <Link className="btn btn-ghost normal-case text-4xl" to="/login"> Login</Link>
        <Link className="btn btn-ghost normal-case text-4xl" to="/regester"> Regester</Link>
      </div>
    </div>
  );
};

export default Header;
