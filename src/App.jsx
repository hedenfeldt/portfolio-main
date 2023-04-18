import { useState } from "react";
import "./App.css";



import TextToSpeech from "./components/TextToSpeech";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/text-to-speech" element={<TextToSpeech />} />

      </Routes>
    </div>
  );
}

export default App;
