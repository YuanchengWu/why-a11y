import "./App.css";
import { Button } from "@workday/canvas-kit-react-button";
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
          <Button
            size={Button.Size.Large}
            variant={Button.Variant.Secondary}
            onClick={handleStartClick}
            tabIndex={start ? -1 : 0}
          >
            Start!
          </Button>
        </div>
      </div>
      <div id="veil" className={`${showPage && "moved"}`} aria-hidden />
      <div className="centered background">
        <Carousel />
      </div>
      <Button
        style={{
          position: "absolute",
          bottom: "2rem",
          right: "2rem",
        }}
        size={Button.Size.Small}
        variant={Button.Variant.Secondary}
        onClick={handleReset}
        tabIndex={showPage ? 0 : -1}
        aria-hidden
      >
        Reset
      </Button>
    </>
  );
}
