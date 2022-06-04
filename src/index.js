import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./css/index.css"
import image from "./imagens/img.jpeg"

function App() {
  const [facts, setFacts] = useState([]);
  
  useEffect(() => {
  
    const request = axios.get("https://cat-fact.herokuapp.com/facts");
    
    request.then(response => {
      setFacts(response.data);
    });
  })

  return (
    <>
      <ul>
      {
        facts.map(fact => <li>{fact.text}</li>)
      }
      </ul>
      <img src={image}></img>
    </>

  );
}

ReactDOM.render(<App />, document.querySelector(".root"));