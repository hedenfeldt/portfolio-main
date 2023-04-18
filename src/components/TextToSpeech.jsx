import React from "react";
import "./TextToSpeech.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function TextToSpeech() {
  const [ourText, setOurText] = useState("");

  const msg = new SpeechSynthesisUtterance();

  const speechHandler = (msg) => {
    msg.text = ourText;
    window.speechSynthesis.speak(msg);
  };

  return (
    <div className="text-to-specch-container">
    <div className="TextToSpeechCard">
      <a href="https://reactjs.org/" target="blank">
        {" "}
        <img
          className="TextToSpeech-img"
          src="Screenshot Capture - 2023-04-18 - 01-45-41.png"
          alt="TextToSpeech"
        />{" "}
      </a>
      <a
        href="https://www.assemblyai.com/blog/react-text-to-speech-simplified/"
        target="blank"
      >
        {" "}
        <h1>☆ Text to Speech AI ☆</h1>{" "}
      </a>
      <input
        type="text"
        value={ourText}
        placeholder="Enter Text -> press to speak"
        onChange={(e) => setOurText(e.target.value)}
      />
      <button onClick={() => speechHandler(msg)}>SPEAK</button>
      
    </div>
    </div>
  );
}
export default TextToSpeech;
