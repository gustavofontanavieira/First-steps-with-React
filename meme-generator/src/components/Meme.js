import "../App.css";
import memeArray from "../MemesData";

const Meme = () => {
  let url;
  function getMeme() {
    const arrayN = Math.floor(Math.random() * memeArray.length);
    Number(arrayN);
    url = memeArray[arrayN].url;
    return url;
  }

  return (
    <div className="form">
      <form className="inputs">
        <input
          className="input--box"
          type="text"
          placeholder=" first description"
        />
        <input
          className="input--box"
          type="text"
          placeholder=" second description"
        />
      </form>
      <button className="form--button" onClick={getMeme}>
        Crate a new meme
      </button>
      <img src={url} alt="meme" />
    </div>
  );
};

export default Meme;
