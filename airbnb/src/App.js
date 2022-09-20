import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="card-display">
        {data.map((infos) => {
          return <Card key={infos.id} {...infos} />;
        })}
      </div>
    </div>
  );
}

export default App;
