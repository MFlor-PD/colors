import { useState } from "react";
import BoxColor from "./BoxColor";

const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

const MyFormChallenge = () => {
  const [inputValue, setInputValue] = useState('');
  const [resetTrigger, setResetTrigger] = useState(false);
  const [showHelp, setShowHelp] = useState(false); // 👉 nuevo estado

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setResetTrigger(false); // Si escribís algo, cancelamos el reset
  };

  const handleReset = () => {
    setInputValue('');
    setResetTrigger(true); // Dispara el reinicio de cajas
  };

   const handleHelp = () => {
    setShowHelp(true); // 👉 mostrar colores
    setTimeout(() => setShowHelp(false), 3000); // 👉 ocultarlos después de 3 segundos
  };

  return (
    <div className="form-container">
      <div className="input-group">
        <input
          type="text"
          placeholder="Write a color"
          value={inputValue}
          onChange={handleChange}
        />
        <button className="reset-button" onClick={handleReset}>Reset</button>
        <button className="reset-button" onClick={handleHelp}>Help</button>
      </div>

      <div className="grid">
        {colors.map((color) => (
          <BoxColor
            key={color}
            color={color}
            inputValue={inputValue}
            reset={resetTrigger} // pasamos el trigger
            showHelp={showHelp}
          />
        ))}
      </div>
    </div>
  );
};

export default MyFormChallenge;
