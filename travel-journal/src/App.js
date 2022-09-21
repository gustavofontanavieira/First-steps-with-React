import "./App.css";
import Navbar from "./components/Navbar";
import Infos from "./components/Infos";
import infos from "./data";

function App() {
  return (
    <div className="site--content">
      <Navbar />
      {infos.map((info) => {
        return <Infos {...info} key={info.id} />;
      })}
    </div>
  );
}

export default App;
