import { useEffect, useRef, useState } from "react";
import "./Carousel.css";

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
    const cards = content.current?.getElementsByTagName("section");
    setIsAnimating(!isAnimating);

    if (isAnimating) {
      setCardIndex((cardIndex + 1) % 3);
      cards?.item(cardIndex)?.focus();
    }
  }

  useInterval(rotateCarousel, 4000);

  return (
    <figure className="icon-cards">
      <div className="icon-cards-content" ref={content}>
        <section className="icon-cards item" tabIndex={1}>
          <h3>Some stuff</h3>
        </section>
        <section className="icon-cards item" tabIndex={1}>
          <h3>More things</h3>
        </section>
        <section className="icon-cards item" tabIndex={1}>
          <h3>And even more!</h3>
        </section>
      </div>
    </figure>
  );
}
