import "./App.css";
import "@workday/canvas-kit-css-button/index.scss";
import { useState } from "react";

import { Form } from "./Form";

export default function App(): JSX.Element {
  const [showPage, setShowPage] = useState(false);

  function handleClick() {
    setShowPage(true);
  }

  return (
    <>
      <div className={`cover ${showPage && "moved"}`}>
        <div className="centered">
          <button className="wdc-btn wdc-btn-size-l" onClick={handleClick}>
            Start!
          </button>
        </div>
      </div>
      <div className="centered background">
        <Form />
      </div>
    </>
  );
}
