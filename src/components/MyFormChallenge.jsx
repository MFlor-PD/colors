import { useState, useEffect } from "react";
import BoxColor from "./BoxColor";

const allColors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive', 'orange', 'brown', 'cyan', 'magenta', 'lime', 'maroon', 'navy', 'teal', 'silver', 'gold'];

function getRandomCombination(allColors, size = 9) {
  const copy = [...allColors];
  const combination = [];
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * copy.length);
    combination.push(copy.splice(randomIndex, 1)[0]);
  }
  return combination;
}

const MyFormChallenge = () => {
  const [inputValue, setInputValue] = useState('');
  const [currentCombination, setCurrentCombination] = useState(() => getRandomCombination(allColors));
  const [activeColors, setActiveColors] = useState([]); // colores adivinados
  const [showHelp, setShowHelp] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  const handleChange = (e) => {
    const val = e.target.value.toLowerCase();
    setInputValue(val);
    setShowHelp(false);

    if (val !== '' && currentCombination.includes(val) && !activeColors.includes(val)) {
      setActiveColors(prev => [...prev, val]);
    }
  };

  useEffect(() => {
    if (activeColors.length === currentCombination.length && currentCombination.length > 0) {
      setGameFinished(true);
    }
  }, [activeColors, currentCombination]);

  const handleReset = () => {
    setInputValue('');
    setActiveColors([]);
    setGameFinished(false);
  };

  const handleHelp = () => {
    setShowHelp(true);
    setTimeout(() => setShowHelp(false), 3000);
  };

  const handleContinue = () => {
    const newCombination = getRandomCombination(allColors);
    setCurrentCombination(newCombination);
    setActiveColors([]);
    setInputValue('');
    setGameFinished(false);
  };

  return (
    <div className="form-container">
      <div className="input-group">
        <input
          type="text"
          placeholder="Write a color"
          value={inputValue}
          onChange={handleChange}
          disabled={gameFinished}
        />
        <button className="reset-button" onClick={handleReset} disabled={gameFinished}>Reset</button>
        <button className="reset-button" onClick={handleHelp} disabled={gameFinished}>Help</button>
      </div>

      <div className="grid">
        {currentCombination.map((color) => (
          <BoxColor
            key={color}
            color={color}
            active={activeColors.includes(color)}  // aquí usamos el prop active
            showHelp={showHelp}
            reset={gameFinished ? true : false}   // opcional para resetear cuando termina juego
          />
        ))}
      </div>

      {gameFinished && (
        <div className="congrats-message">
          <h2>Congratulations! You have guessed all the colors!</h2>
          <button className="reset-button" onClick={handleContinue}>Continue</button>
        </div>
      )}
    </div>
  );
};

export default MyFormChallenge;
