import "./About.css";

export default function About() {
  return (
    <div id="about" className="container">
      <div className="left column">
        <h2 className="title">Habilities / Knowledge</h2>
        <hr />
        <p className="paragraph">
          HTML5, CSS3, Bootstrap 4, JavaScript, Git, Express, Sequelize,
          TypeORM, MySQL, Node.js, NestJS, Firebase, TypeScript, Figma,
          React-native and RestAPI.
        </p>

        <h2 className="title">Education</h2>
        <hr />
        <p className="paragraph">
          <strong>Tech Course</strong> <br />
          Developer System Technician (1500h)
          <br />
          2022 <br />
          ETEC Antônio Furlan.
        </p>
        <br />
        <p className="paragraph">
          <strong>Tech Course</strong> <br />
          The Complete JavaScript Course 2022: From Zero to Expert! - In
          Progress
          <br />
          2022 <br />
          Udemy
        </p>
      </div>
      <div className="right column">
        <h2 className="title">Objective</h2>
        <hr />
        <p className="paragraph">
          Work as a front-end or back-end developer and gain more experince as a
          System Developer.
        </p>

        <h2 className="title">SKILLS & PROFICIENCIES</h2>
        <hr />
        <ul className="list">
          <li>
            <p className="paragraph">
              HTML5, CSS3, Bootstrap, NodeJS and JavaScript (Front-end and
              Back-end), MySQL;
            </p>
          </li>
          <li>
            <p className="paragraph">
              Teamwork, attention to detail, focus, communication, fast
              learning;
            </p>
          </li>
          <li>
            <p className="paragraph">Prototyping and design;</p>
          </li>
        </ul>

        <h2 className="title">Language</h2>
        <hr />
        <ul className="list">
          <li>
            <p className="paragraph">Brazilian Portuguese(Native)</p>
          </li>
          <li>
            <p className="paragraph">English (Basic)</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
