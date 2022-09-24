import "../App.css";
import imageMeme from "../images/the-rock.jpeg";

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img className="navbar--image" src={imageMeme} alt="theRock" />
        <h3>Meme Generator</h3>
      </div>
      <div>
        <p className="navbar--description">React Course - Project 3</p>
      </div>
    </div>
  );
};

export default Header;
