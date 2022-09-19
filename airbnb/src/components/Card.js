import "../App.css";
import image1 from "../images/image 12.png";
import star from "../images/Star 1.png";

export default function Card(props) {
  return (
    <div className="card">
      <img src={image1} className="card--image" />
      <div className="card--description">
        <div className="card--rate">
          <img src={star} className="card--star" />
          <p className="card--title">
            <strong>5.0</strong> (6) - USA
          </p>
        </div>
        <p className="card--resume">Life lessons with Katie Zaferes</p>
        <p className="card-price">
          <strong>From $136</strong> / person
        </p>
      </div>
    </div>
  );
}
