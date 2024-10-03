import { useEffect, useState } from "react";
import "./colorGuess.css";
const ColorGuess = () => {
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(false);
  const [bgColor, setBgColor] = useState();
  const array = [
    "#020617",
    "#ef4444",
    "#f97316",
    "#fcd34d",
    "#a3e635",
    "#16a34a",
    "#22d3ee",
    "#38bdf8",
    "#8b5cf6",
    "#d946ef",
    "#4c0519",
  ];

  useEffect(() => {
    const bgColorNumber = Math.floor(Math.random() * array.length);
    console.log(array[bgColorNumber]);
    setBgColor(bgColorNumber);
  }, []);

  const color_codes = [array[bgColor]];
  const pickTwoRandomCodes = () => {
    while (color_codes.length < 3) {
      let number = Math.floor(Math.random() * array.length);
      !color_codes.includes(array[number]) && color_codes.push(array[number]);
    }
  };
  pickTwoRandomCodes();

  const Shuffle = () => {
    for (let i = color_codes.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [color_codes[i], color_codes[j]] = [color_codes[j], color_codes[i]];
    }
  };
  Shuffle();

  const validateColors = (color) => {
    setShowResult(true);
    color === array[bgColor] ? setResult(true) : setResult(false);
  };
  return (
    <>
      <div className="container">
        <div
          className="color_square"
          style={{ backgroundColor: `${array[bgColor]}` }}
        ></div>
        <div className="colors">
          {color_codes.map((color, index) => (
            <div
              className="color_code"
              key={index}
              onClick={!showResult ? () => validateColors(color) : undefined}
            >
              {color}
            </div>
          ))}
        </div>
        {showResult && (
          <div className="result">
            {result ? "Gussed Correct" : "Sorry Try Again"}
            <button className="button" onClick={()=>location.reload()}>wanna play again?</button>
          </div>
        )}
      </div>
    </>
  );
};

export default ColorGuess;
