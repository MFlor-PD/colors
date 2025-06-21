import { useRef, useEffect } from "react";

const BoxColor = ({ color, inputValue }) => {
  const boxRef = useRef(null);
  const trimmedInput = inputValue.trim().toLowerCase();
  const match = trimmedInput === color.toLowerCase();

  useEffect(() => {
    if (!boxRef.current) return;

    if (match) {
      boxRef.current.style.backgroundColor = color;
      boxRef.current.style.color = "white";
    } else {
      boxRef.current.style.backgroundColor = "#f0f0f0";
      boxRef.current.style.color = "black";
    }
  }, [match, color]);

  return (
    <div ref={boxRef} className="box">
      <p>{inputValue}</p>
      <p>{match ? `¡Soy ${color}!` : "No soy el color"}</p>
    </div>
  );
};

export default BoxColor;



