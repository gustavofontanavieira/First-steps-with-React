import "./Header.css";
import Me from "../images/me.jpg";
import d20 from "../images/d20.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="me">
        <img src={Me} className="picture" />
      </div>
      <div className="about-me">
        <h5>
          My name is Gustavo Fontana Vieira, im 18 years old, a brazilian high
          school student and Developer System Technician by ETEC Antônio Furlan.
        </h5>
        <br />
        <h5>
          I have knowledge about JavaScript, TypeScript, NodeJS, NestJS,
          Sequelize, TypeORM and Express. JavaScript being my "main language".
        </h5>
        <br />
        <h5>
          Im focusing in study front-end development and aprofuding my knowledge
          about ReactJS and CSS.
        </h5>
        <div className="img-position">
          <img src={d20} className="d20" />
        </div>
      </div>
    </header>
  );
}
