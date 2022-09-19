import "./Contact.css";
import linkedinLogo from "../images/linkedin.png";
import instagramLogo from "../images/instagram.png";
import githubLogo from "../images/placa-do-github.png";
import emailLogo from "../images/o-email.png";

export default function Contact() {
  return (
    <div id="contact" className="contact">
      <h2>Contact-me</h2>
      <hr className="horizontal-row" />
      <div className="contact-display">
        <div className="social-media">
          <h2>Linkedin</h2>
          <a href="https://www.linkedin.com/in/gustavo-fontana-vieira-741299209/">
            <img src={linkedinLogo} />
          </a>
        </div>
        <div className="social-media">
          <h2>Instagram</h2>
          <a href="https://www.instagram.com/guhh_fv/">
            <img src={instagramLogo} />
          </a>
        </div>
        <div className="social-media">
          <h2>GitHub</h2>
          <a href="https://github.com/gustavofontanavieira">
            <img src={githubLogo} />
          </a>
        </div>
        <div className="social-media">
          <h2>E-mail</h2>
          <a href="mailto:gustavoacvvieira@outlook.com">
            <img src={emailLogo} />
          </a>
        </div>
      </div>
    </div>
  );
}
