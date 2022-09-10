import "./Projects.css";

export default function Projects() {
  return (
    <div id="projects" className="projects">
      <div className="projects-title">
        <h2>My Projects</h2>
        <hr className="horizontal-row" />
      </div>
      <div className="project-item mt-2">
        <a href="https://github.com/AnDamazio/book4u-api">Book4U - API</a>
        <p className="mt-2">
          Book4U API it is an API created with my course friend for the final
          paper in the development system technician course that i made it in
          2022. The application is basically a mobile APP for people trade their
          physical books, used books, new books or semi-used books.
        </p>
        <p>
          In this project we used NodeJS, TypeORM, NestJS, TypeSript, Firebase,
          JWT and MySQL to create the data database and manipulate it, creating
          end-points and validations for API. The application have their unique
          register and login system.
        </p>
        <p>Functionalities of the back-end (API):</p>
        <ul className="project-list">
          <li>
            Automatic sending of emails using nodemailer and gmail service;
          </li>
          <li>Authentication system with JsonWebToken;</li>
          <li>Concept of clean architecture;</li>
          <li>Sending images to and getting of Firebase.</li>
        </ul>
      </div>

      <hr className="horizontal-row mt-2" />
      <div className="project-item mt-2">
        <a href="https://github.com/gustavofontanavieira/CRUD-HOSPITAL">
          Doctors register system - CRUD
        </a>
        <p className="mt-2">
          This is a project realizated as a academic work, creating the API and
          consuming it in the front-end.
        </p>
        <p>
          In this project i used Sequelize, Express, EJS, NodeJS, JavaScript,
          Bootstrap 4, MySQL and Axios to consume the API.
        </p>
        <p>Functionalities of the application:</p>
        <ul className="project-list">
          <li>Front-end and back-end connection;</li>
          <li>HTTP verbs and Axios requests;</li>
          <li>CRUD System (Create, Read, Update and Delete)</li>
        </ul>
      </div>
    </div>
  );
}
