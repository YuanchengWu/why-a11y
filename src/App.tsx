import "./App.css";
import "@workday/canvas-kit-css-button/index.scss";
import { useState } from "react";
import { useKonami } from "react-konami-code";

import { Carousel } from "./Carousel";

export default function App(): JSX.Element {
  const [showPage, setShowPage] = useState(false);
  const [start, setStart] = useState(false);
  useKonami(handleUnveil);

  function handleStartClick() {
    setStart(true);
  }

  function handleUnveil() {
    setStart(true);
    setShowPage(true);
  }

  function handleReset() {
    setStart(false);
    setShowPage(false);
  }

  return (
    <>
      <div id="cover" className={`${start && "moved"}`} aria-hidden>
        <div className="centered">
          <button
            className="wdc-btn wdc-btn-size-l"
            onClick={handleStartClick}
            tabIndex={start ? -1 : 0}
          >
            Start!
          </button>
        </div>
      </div>
      <div id="veil" className={`${showPage && "moved"}`} aria-hidden />
      <div className="centered background">
        <Carousel />
      </div>
      <button
        className="wdc-btn wdc-btn-size-s reset-btn"
        onClick={handleReset}
        tabIndex={showPage ? 0 : -1}
        aria-hidden
      >
        Reset
      </button>
    </>
  );
}
