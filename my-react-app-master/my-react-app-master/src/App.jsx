import { useEffect, useState, useRef, use } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function App() {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(25);
  const [isChanged, setIsChanged] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timer = useRef(null);

  function handleChange() {
    setIsChanged(true);
    setIsPaused(false);
  }

  function resetTime() {
    setSecond(0);
    setMinute(25);
    clearTimeout(timer);
    setIsChanged(false);
    setIsPaused(false);
  }

  if (isChanged) {
    if (second > -1) {
      const timer = setTimeout(() => {
        setSecond(second - 1);
      }, 1000);
    } else if (second == -1) {
      setSecond(59);
      setMinute(minute - 1);
    }
  }

  function pauseTimer() {
    setIsChanged(false);
    setIsPaused(true);
  }

  return (
    <>
        <div className="card main" style={{ width: "18rem" }}>
          <h1>
            {minute} : {second}
          </h1>
          <div className="card-body main">
            {isChanged == false && (
              <button
                className="btn btn-outline-primary"
                onClick={handleChange}
              >
                Start
              </button>
            )}
            {isChanged == true && 
              <button
                className="btn btn-outline-secondary"
                onClick={pauseTimer}
              >
                Pause
              </button>
            }
            {isPaused && (
              <button className="btn btn-outline-secondary" onClick={resetTime}>
                reset
              </button>
            )}
          </div>
        </div>
    </>
  );
}

export default App;
