import "./App.css";
import "@workday/canvas-kit-css-button/index.scss";
import { useState } from "react";
import { useKonami } from "react-konami-code";

import { Form } from "./Form";

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
            tabIndex={-1}
          >
            Start!
          </button>
        </div>
      </div>
      <div id="veil" className={`${showPage && "moved"}`} aria-hidden />
      <div className="centered background">
        <Form />
      </div>
      <button
        className="wdc-btn wdc-btn-size-s reset-btn"
        onClick={handleReset}
      >
        Reset
      </button>
    </>
  );
}
