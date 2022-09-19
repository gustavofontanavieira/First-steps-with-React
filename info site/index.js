function Info() {
  return (
    <div class="info card-color">
      <img src="./ghost.jpg" class="picture " />
      <h2 class="card-color">Gustavo Fontana</h2>
      <h4 class="card-color">Front-end Developer</h4>
      <h6 class="card-color">@guhh_fv</h6>
      <div class="buttons card-color">
        <div class="button email-button ">
          <img
            className="button-icon email-button "
            src="https://cdn-icons-png.flaticon.com/512/1633/1633686.png"
          ></img>
          <h5 class="email-button">Email</h5>
        </div>
        <div class="button linkedin-button">
          <img
            className="button-icon linkedin-button"
            src="https://pnggrid.com/wp-content/uploads/2021/05/linkedin-logo-white-1024x1024.png"
          ></img>
          <h5 class="linkedin-button ">Linkedin</h5>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div class="about card-color ">
      <h4 class="card-color title">About</h4>
      <p class="card-color paragraph">
        I am a high school and development system student, focusing in
        JavaScript and your Libraries. I try to keep the security and best
        pratices of front-end development
      </p>
    </div>
  );
}

function Interests() {
  return (
    <div class="about interests card-color ">
      <h4 class="card-color title">Interests</h4>
      <p class="card-color paragraph">
        Book, new technologies, music, cook, watch animes and read mangas, drink
        coffee and water
      </p>
    </div>
  );
}

function Footer() {
  return (
    <div class="footer">
      <a>
        <img src="./sinal-do-twitter.png"></img>
      </a>
      <a>
        <img src="./logotipo-do-aplicativo-do-facebook.png"></img>
      </a>
      <a>
        <img src="./instagram.png"></img>
      </a>
      <a>
        <img src="./placa-do-github.png"></img>
      </a>
    </div>
  );
}

function Site() {
  return (
    <div className="card card-color">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Site />, document.querySelector("#root"));
