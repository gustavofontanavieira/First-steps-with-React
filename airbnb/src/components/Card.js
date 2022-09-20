import "../App.css";
import star from "../images/Star 1.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD-OUT";
  } else if (props.openSpots > 0) {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={props.coverImg} alt="person" className="card--image" />
      <div className="card--description">
        <div className="card--rate">
          <img src={star} alt="star" className="card--star" />
          <p className="card--title">
            <strong>{props.stats.rating}</strong> ({props.stats.reviewCount}) -
            USA
          </p>
        </div>
        <p className="card--resume">{props.title}</p>
        <p className="card-price">
          <strong>From ${props.price}</strong> / person
        </p>
      </div>
    </div>
  );
}
