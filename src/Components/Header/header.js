import React from "react";
import "./header.scss";
import Logo from "../../Assets/Logo.png";
import { HiOutlineChevronDown as DownKey } from "react-icons/hi";

function Header() {
  return (
    <div className="header">
      <div className="left">
        <div className="logo">
          <img src={Logo} loading="lazy" width="36" alt="Logo" />
        </div>
        <div className="links">
          <a href="/" className="arrow">
            Product
            <span>
              <DownKey />
            </span>
          </a>
          <a href="/">Our Story </a>
          <a href="/" className="arrow">
            Resources
            <span>
              <DownKey />
            </span>
          </a>
        </div>
      </div>
      <div className="right">
        <button>Book a demo</button>
      </div>
    </div>
  );
}

export default Header;
