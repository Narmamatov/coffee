import React from "react";
import Logo from "../components/images/image 2.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <nav>
          <Link to="/">
            <h1>Manu</h1>
          </Link>
          <Link to="/order">
            <h1>Order</h1>
          </Link>
          <Link to="/admin">
            <h1>Admin</h1>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
