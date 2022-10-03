import "../App.css";
import memeArray from "../MemesData";
import React from "react";

const Meme = () => {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memeArray);

  function getMeme() {
    const arrayN = Math.floor(Math.random() * allMemeImages.length);
    Number(arrayN);
    const url = allMemeImages[arrayN].url;
    setMeme((previousMeme) => ({
      ...previousMeme,
      randomImage: url,
    }));
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
        <img src={meme.randomImage} alt="meme" className="meme--image" />
      </div>
    </div>
  );
};

export default Meme;
