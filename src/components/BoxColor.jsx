import { useState, useEffect, useRef } from "react";

const BoxColor = ({ color, active, reset, showHelp }) => {
  const innerBoxRef = useRef(null);
  const boxRef = useRef(null);
  const frontTextRef = useRef(null);
  const backColorTextRef = useRef(null);

  useEffect(() => {
    if (!innerBoxRef.current || !boxRef.current || !frontTextRef.current || !backColorTextRef.current) return;

    if (active || showHelp) {
      innerBoxRef.current.classList.add("flipped");
    } else {
      innerBoxRef.current.classList.remove("flipped");
    }

    

    frontTextRef.current.style.color = "black";
    frontTextRef.current.style.fontWeight = "bold";
    frontTextRef.current.style.webkitTextStroke = "0";

    backColorTextRef.current.style.color = color;
    backColorTextRef.current.style.webkitTextStroke = "1px black";
    backColorTextRef.current.style.fontWeight = "lighter";

  }, [active, showHelp, color]);

  return (
    <div className="box" ref={boxRef}>
      <div ref={innerBoxRef} className="inner-box">
        <div className="front">
          <p className="guess-text" ref={frontTextRef}>Guess my color</p>
        </div>
        <div className="back" style={{ backgroundColor: color }}>
          <p ref={backColorTextRef}>{color}</p>
          <p style={{ fontWeight: "lighter" }}>Yes! I am the {color} color!</p>
        </div>
      </div>
    </div>
  );
};


export default BoxColor;
