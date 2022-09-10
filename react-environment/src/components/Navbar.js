import React from "react";
import reactLogo from "../images/logo192.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={reactLogo} />
        <h2>ReactFacts</h2>
      </div>
      <div>
        <h4>React Course - Project 1</h4>
      </div>
    </nav>
  );
}
