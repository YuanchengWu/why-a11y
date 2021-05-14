import "./App.css";
import "@workday/canvas-kit-css-button/index.scss";
import { useState } from "react";

import { Form } from "./Form";

export default function App(): JSX.Element {
  const [showPage, setShowPage] = useState(false);
  const [start, setStart] = useState(false);

  function handleStartClick() {
    setStart(true);
  }

  function handleUnveil() {
    setShowPage(true);
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
      <div id="veil" className={`${showPage && "moved"}`} aria-hidden>
        <div>
          <button
            className="wdc-btn wdc-btn-size-s developer-btn"
            onClick={handleUnveil}
            tabIndex={-1}
          >
            I am the developer (unhide)
          </button>
        </div>
      </div>
      <div className="centered background">
        <Form />
      </div>
    </>
  );
}
