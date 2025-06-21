import { useState } from "react";
import BoxColor from "./BoxColor";

const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

const MyFormChallenge = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value); 
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Escribe un color"
        value={inputValue}
        onChange={handleChange}
      />
      <div className="grid">
        {colors.map((color) => (
          <BoxColor
            key={color}
            color={color}
            inputValue={inputValue}
          />
        ))}
      </div>
    </div>
  );
};

export default MyFormChallenge;


