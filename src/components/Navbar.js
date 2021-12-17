import React from "react";

import "../style/navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="Rebel Alliance symbol" className="logo"></img>
      <h3>The totally awesome Star Wars Fanclub</h3>
    </div>
  );
}
