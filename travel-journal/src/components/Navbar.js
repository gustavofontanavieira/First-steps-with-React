import terraImage from "../images/terra.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar--logo">
        <img src={terraImage} alt="terra" className="terra--image" />
        <h3>my travel journal</h3>
      </div>
    </div>
  );
};

export default Navbar;
