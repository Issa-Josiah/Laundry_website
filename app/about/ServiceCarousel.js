"use client";
import { useEffect, useState } from "react";

export default function ServiceCarousel({ services }) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (services.length === 0) return;
    const interval = setInterval(() => {
      // Fade out → swap → fade in
      setFade(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % services.length);
        setFade(true);
      }, 400); // fade-out duration
    }, 15000);
    return () => clearInterval(interval);
  }, [services.length]);

  if (services.length === 0) return null;
  const current = services[index];

  return (
    <div className="carousel">
      <p className="eyebrow">What we offer</p>
      <h2 style={{ marginBottom: 20 }}>Care, rotating through the day.</h2>

      <div className={`carousel-card${fade ? " is-visible" : ""}`}>
        <div className="carousel-image">
          {current.image ? (
            <img src={current.image} alt={current.title} />
          ) : (
            <div className="ph">{current.title}</div>
          )}
        </div>
        <div className="carousel-body">
          <span className="carousel-num">{current.id}</span>
          <h3>{current.title}</h3>
          <p>{current.description}</p>
        </div>
      </div>

      <div className="carousel-dots">
        {services.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={`dot${i === index ? " active" : ""}`}
            aria-label={`Show ${s.title}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
