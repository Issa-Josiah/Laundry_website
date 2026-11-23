import Link from "next/link";
import ServiceCarousel from "../about/ServiceCarousel";


const EMPTY_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 420'%3E%3Crect width='640' height='420' fill='%23f1f5f9'/%3E%3Ctext x='320' y='190' text-anchor='middle' font-size='65' fill='%2394a3b8'%3E%2B%3C/text%3E%3Ctext x='320' y='250' text-anchor='middle' font-size='24' fill='%2364748b'%3EChange photo%3C/text%3E%3C/svg%3E";

export default function AboutContent({
  content,
  featuredServices = [],
  showEmptyImageSlots = false,
}) {
  const hasWelcomeImage =
    typeof content.welcome.image === "string" &&
    content.welcome.image.trim() !== "";

  const hasGoodCareImage =
    typeof content.goodCare.image === "string" &&
    content.goodCare.image.trim() !== "";

  return (
    <>
      <section className="section welcome-section">
        <div className="container">
          <div className="welcome-grid">
            <div className="welcome-image admin-image-wrap">
              {(hasWelcomeImage || showEmptyImageSlots) && (
                <img
                  data-edit-image="welcome.image"
                  src={hasWelcomeImage ? content.welcome.image : EMPTY_IMAGE}
                  alt="King's DryCleaners shop front"
                  style={
                    !hasWelcomeImage
                      ? { objectFit: "contain", background: "#f1f5f9" }
                      : undefined
                  }
                />
              )}
            </div>

            <div className="welcome-note welcome-note--pop">
              <p className="eyebrow" data-edit="welcome.eyebrow">
                {content.welcome.eyebrow}
              </p>

              <h1 data-edit="welcome.title">{content.welcome.title}</h1>

              <ul className="welcome-facts">
                <li>
                  <span className="fact-label" data-edit="welcome.locationLabel">
                    {content.welcome.locationLabel}
                  </span>
                  <span className="fact-value" data-edit="welcome.locationValue">
                    {content.welcome.locationValue}
                  </span>
                </li>
              </ul>

              <p className="trust-phrase" data-edit="welcome.trustPhrase">
                {content.welcome.trustPhrase}
              </p>

              <div className="btn-row">
                <Link href="/find-us" className="btn">Find us</Link>
                <Link href="/contact" className="btn btn-outline">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="two-col">
            <div className="steps-col">
              <p className="eyebrow">From drop-off to fresh</p>
              <h2>Simple from start to finish.</h2>

              <div className="steps vertical">
                {content.steps.map((s, i) => (
                  <div key={s.id} className="step">
                    <span className="num" data-edit={`steps.${i}.id`}>
                      {s.id}
                    </span>
                    <h3 data-edit={`steps.${i}.title`}>{s.title}</h3>
                    <p data-edit={`steps.${i}.text`}>{s.text}</p>
                  </div>
                ))}
              </div>
            </div>

          <div className="carousel-col">
            <ServiceCarousel services={featuredServices} />
          </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            {(hasGoodCareImage || showEmptyImageSlots) && (
              <div className="admin-image-wrap">
              <img
                data-edit-image="goodCare.image"
                src={hasGoodCareImage ? content.goodCare.image : EMPTY_IMAGE}
                alt="Wash, Dry, Fold sign"
                style={
                  !hasGoodCareImage
                    ? { objectFit: "contain", background: "#f1f5f9" }
                    : undefined
                }
              />
              </div>
            )}

            <div>
              <p className="eyebrow" data-edit="goodCare.eyebrow">
                {content.goodCare.eyebrow}
              </p>

              <h2 data-edit="goodCare.title">{content.goodCare.title}</h2>

              <p data-edit="goodCare.text">{content.goodCare.text}</p>

              <p className="highlight" data-edit="goodCare.highlight">
                {content.goodCare.highlight}
              </p>

              <p data-edit="goodCare.text2">{content.goodCare.text2}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
