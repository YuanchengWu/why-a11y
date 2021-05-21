import { useEffect, useRef, useState } from "react";
import "./Carousel.css";

import KonamiLogo from "./Konami_1986.svg";

function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current?.();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

/**
 * Adapted from https://codepen.io/edmundojr/pen/qdLWWx
 */
export function Carousel(): JSX.Element {
  const content = useRef<HTMLDivElement>(null);
  const [cardIndex, setCardIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  function rotateCarousel() {
    content.current?.classList.toggle("animate");
    const cards = content.current?.getElementsByTagName("article");
    setIsAnimating(!isAnimating);

    if (isAnimating) {
      setCardIndex((cardIndex + 1) % 3);
      cards?.item(cardIndex)?.focus();
    }
  }

  useInterval(rotateCarousel, 4000);

  return (
    <section>
      <img src={KonamiLogo} alt="Konami 1986 logo" width="160" />
      <h1>Konami Classics</h1>
      <p></p>
      <figure className="icon-cards">
        <div className="icon-cards-content" ref={content}>
          <article className="icon-cards item" tabIndex={1}>
            <h2>Frogger</h2>
          </article>
          <article className="icon-cards item" tabIndex={1}>
            <h2>Contra</h2>
          </article>
          <article className="icon-cards item" tabIndex={1}>
            <h2>Castlevania</h2>
          </article>
        </div>
      </figure>
    </section>
  );
}
