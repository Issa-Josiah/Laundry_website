
"use client";

import { useEffect, useState } from "react";

const EMPTY_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 420'%3E%3Crect width='640' height='420' fill='%23f1f5f9'/%3E%3Ctext x='320' y='210' text-anchor='middle' font-size='65' fill='%2394a3b8'%3E%2B%3C/text%3E%3C/svg%3E";

export default function ServiceCarousel({
  services = [],
  editable = false,
  showEmptyImageSlots = false,
  editPath = "featuredServices",
  heading = "Care, rotating through the day.",
}) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (services.length <= 1) return;

    const interval = setInterval(() => {
      setFade(false);

      const timeout = setTimeout(() => {
        setIndex((current) => (current + 1) % services.length);
        setFade(true);
      }, 400);

      return () => clearTimeout(timeout);
    }, 15000);

    return () => clearInterval(interval);
  }, [services.length]);

  useEffect(() => {
    if (index >= services.length) {
      setIndex(0);
    }
  }, [index, services.length]);

  if (!services.length) return null;

  const current = services[index];

  const hasImage =
    typeof current.image === "string" &&
    current.image.trim() !== "";

  return (
    <div className="carousel">

      <p className="eyebrow">What we offer</p>

      <h2 style={{ marginBottom: 20 }}>
        {heading}
      </h2>

      <div className={`carousel-card ${fade ? "is-visible" : ""}`}>

        <div className="carousel-image">
          {(hasImage || showEmptyImageSlots) && (
            <img
              src={hasImage ? current.image : EMPTY_IMAGE}
              alt={current.title}
              data-edit-image={
                editable
                  ? `${editPath}.${index}.image`
                  : undefined
              }
              className={
                editable && !hasImage
                  ? "admin-service-image"
                  : ""
              }
            />
          )}
        </div>

        <div className="carousel-body">

          <span
            className="carousel-num"
            data-edit={
              editable
                ? `${editPath}.${index}.id`
                : undefined
            }
          >
            {current.id}
          </span>

          <h3
            data-edit={
              editable
                ? `${editPath}.${index}.title`
                : undefined
            }
          >
            {current.title}
          </h3>

          <p
            data-edit={
              editable
                ? `${editPath}.${index}.description`
                : undefined
            }
          >
            {current.description}
          </p>

        </div>
      </div>

      <div className="carousel-dots">
        {services.map((service, i) => (
          <button
            key={service.id}
            type="button"
            className={`dot ${i === index ? "active" : ""}`}
            aria-label={`Show ${service.title}`}
            aria-current={i === index ? "true" : undefined}
            onClick={() => {
              setIndex(i);
              setFade(true);
            }}
          />
        ))}
      </div>

    </div>
  );
}
