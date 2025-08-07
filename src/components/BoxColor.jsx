import { useState, useEffect, useRef } from "react";

const BoxColor = ({ color, inputValue, reset, showHelp }) => {
  const [active, setActive] = useState(false);
  const trimmedInput = inputValue.trim().toLowerCase();
  const match = trimmedInput === color.toLowerCase();

  useEffect(() => {
    if (reset) {
      setActive(false);
    } else if (match) {
      setActive(true);
    }
  }, [match, reset]);

  const shouldFlip = active || showHelp;

  return (
    <div className="box">
       <div className={`inner-box ${shouldFlip ? "flipped" : ""}`}>
        <div className="front">
          <p className="guess-text">Guess my color</p>
        </div>
        <div className="back" style={{ backgroundColor: color }}>
          <p style={{ color }}>{color}</p>
          <p style={{ fontWeight: "lighter" }}>Yes! I am the {color} color!</p>
        </div>
      </div>
    </div>
  );
};
export default BoxColor;
