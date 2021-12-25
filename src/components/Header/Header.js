import React from "react";
import { Link } from "react-router-dom";
import CartBlock from "../CartBlock/CartBlock";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="wraper">
        <Link to="/" className="header_store">
          Game Store
        </Link>
      </div>
      <div className="wraper headr_cart-btn-wraper">
        <CartBlock />
      </div>
    </div>
  );
};

export default Header;
