import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [para, setPara] = useState("");
  function buttonclickedfunc() {
    setPara(
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    );
  }
  return (
    <div id="main">
      {/* // Do not alter the main div */}
      <p id="para">{para}</p>
      <button id="click" onClick={buttonclickedfunc}>
        Show me the sentence
      </button>
    </div>
  );
}

export default App;
