import Link from "next/link";

export default function AboutContent({ content }) {
  return (
    <>
      <section className="section welcome-section">
        <div className="container">
          <div className="welcome-grid">
            <div className="welcome-image">
              <img data-edit-image="welcome.image" src={content.welcome.image} alt="King's DryCleaners shop front" />
            </div>
            <div className="welcome-note welcome-note--pop">
              <p className="eyebrow" data-edit="welcome.eyebrow">{content.welcome.eyebrow}</p>
              <h1 data-edit="welcome.title">{content.welcome.title}</h1>
              <ul className="welcome-facts">
                <li>
                  <span className="fact-label" data-edit="welcome.locationLabel">{content.welcome.locationLabel}</span>
                  <span className="fact-value" data-edit="welcome.locationValue">{content.welcome.locationValue}</span>
                </li>
              </ul>
              <p className="trust-phrase" data-edit="welcome.trustPhrase">{content.welcome.trustPhrase}</p>
              <div className="btn-row">
                <Link href="/find-us" className="btn">Find us</Link>
                <Link href="/contact" className="btn btn-outline">Contact us</Link>
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
                    <span className="num" data-edit={`steps.${i}.id`}>{s.id}</span>
                    <h3 data-edit={`steps.${i}.title`}>{s.title}</h3>
                    <p data-edit={`steps.${i}.text`}>{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="carousel-col">
              <p style={{ color: "var(--muted)", fontSize: 14 }}>Service carousel — add services to content JSON to make editable.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <img data-edit-image="goodCare.image" src={content.goodCare.image} alt="Wash, Dry, Fold sign" />
            <div>
              <p className="eyebrow" data-edit="goodCare.eyebrow">{content.goodCare.eyebrow}</p>
              <h2 data-edit="goodCare.title">{content.goodCare.title}</h2>
              <p data-edit="goodCare.text">{content.goodCare.text}</p>
              <p className="highlight" data-edit="goodCare.highlight">{content.goodCare.highlight}</p>
              <p data-edit="goodCare.text2">{content.goodCare.text2}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
