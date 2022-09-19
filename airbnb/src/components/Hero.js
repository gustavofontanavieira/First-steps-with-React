import "../App.css";
import imageGroup from "../images/Group 77.png";

export default function Hero() {
  return (
    <section className="hero">
      <img className="image-group" src={imageGroup} />
      <div className="hero-description">
        <h1 className="hero-title">Online Experiences</h1>
        <p className="hero-paragraph">
          Join unique interactive activies led by one-of-a-kind hosts-all
          without leaving home
        </p>
      </div>
    </section>
  );
}
