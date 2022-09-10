/* ReactDOM.render(
  <ul>
    <li>JavaScript</li>
    <li>ReactJS</li>
  </ul>,
  document.querySelector("#list")
); */

/* function MainContent() {
  return (
    (<h3>Hello, my name is Gustavo, a high school and programming student</h3>),
    (
      <h5>
        Im studying ReactJS right now! im so exited to learn new things and how
        to work with this amazing library
      </h5>
    )
  );
}

ReactDOM.render(<MainContent />, document.querySelector("#root"));
 */

//CHALLENGE =============================================================================================================================
/* document.querySelector("#root").innerHTML =
  "<h1 class='header'>OMG this is a challenge</h1>"; */

//RIGHT WAY
/* const h1 = document.createElement("h1");
h1.textContent = "This is a imperative way to program";
h1.className = "header";
document.getElementById("root").append(h1); */

//========================================================================================================================================
/* ReactDOM.render(
  <h1 class="header">Hello, React</h1>,
  document.querySelector("#root")
); */

/* const element = <h1 className="header">Hello world but in JSX</h1>;
console.log(element); */

/* ReactDOM.render(
  <div>
    <h1>This is a h1</h1>
    <p>This is a paragraph</p>
  </div>,
  document.querySelector("#root")
);
 */

//CHALLENGE ==============================================================================================================================
/* const navbar = (
  <nav>
    <h1>My Website, or OUR WEBSITE ☭</h1>
    <ul>
      <li>Princing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

ReactDOM.render(navbar, document.querySelector("#root")); */
//========================================================================================================================================

/* function TemporaryName() {
  return (
    <div>
      <img src="./react-logo.png" width="80px" height="80px"></img>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on GitHub</li>
        <li>Is maintained by Facebook/Meta</li>
        <li>Power thousands of enterprise apps, including mobile apps.</li>
      </ul>
    </div>
  );
} */

console.log("oi");

import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
