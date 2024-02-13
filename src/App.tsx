import { useState } from "react";
import "./App.css";

const phrases = [
  "no",
  "no :cccc",
  "reconsider pls",
  "pretty pleasse with a cherry on top",
  "seriously",
  "beb pls",
  "fell to my knees",
  "dllm eshe",
  "like actually min",
  "im gonna die",
  "ur talking to amis ghost now",
  "still no??",
  "do u hate me",
  "is that ur final answer </3333",
];
function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="kittycat"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
          />
          <div className="text">YAYYY! I LOVE U and i mith u - ami</div>
        </>
      ) : (
        <>
          <img
            alt="kittycat2"
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXJxeGc0czB5am8weGkya3BycjQ0N2FqdXBsMnZuMzJzaDU1cmh3NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/u62ibpUyRSvJ0PyXJU/giphy.gif"
          />
          <div>will you be my valentine?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              YES
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
