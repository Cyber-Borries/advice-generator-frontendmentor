import React, { useEffect, useState } from "react";
import svgSeperator from "../images/pattern-divider-desktop.svg";
import dice from "../images/icon-dice.svg";

export default function Main() {
  const [advice, setAdvice] = useState();
  // const api = "https://api.adviceslip.com/advice";
  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAdvice(data.slip);
      });
  };
  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="main-container">
      <div className="advice-container">
        <div className="advice-header">
          {!advice ? "loading..." : "Advice #" + advice?.id}
        </div>
        <div className="advice-body">
          "{!advice ? "loading advice" : advice?.advice}"
        </div>

        <div className="advice-footer">
          <img className="svgSeperator" src={svgSeperator} />
        </div>

        <div className="dice-div">
          {" "}
          <img className="dice" src={dice} onClick={fetchAdvice} />
        </div>
      </div>
    </div>
  );
}
