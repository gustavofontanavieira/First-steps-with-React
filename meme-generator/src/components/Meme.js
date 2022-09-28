import "../App.css";
import memeArray from "../MemesData";
import React from "react";

const Meme = () => {
  const [meme, setMeme] = React.useState();
  function getMeme() {
    const arrayN = Math.floor(Math.random() * memeArray.length);
    Number(arrayN);
    setMeme(memeArray[arrayN].url);
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
      <div className="image--div">
        <img src={meme} alt="meme" className="meme--image" />
      </div>
    </div>
  );
};

export default Meme;
