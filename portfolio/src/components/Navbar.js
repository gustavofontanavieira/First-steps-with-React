import "./Navbar.css";
import atomoLogo from "../images/atomo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="name-logo">
        <img src={atomoLogo} />
        <h3>Gustavo Fontana</h3>
      </div>
      <div className="nav-items">
        <a href="#projects">Projects</a>
        <a href="#about">About me</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
