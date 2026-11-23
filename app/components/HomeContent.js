import Link from "next/link";

export default function HomeContent({ content }) {
  return (
    <>
      <section className="hero hero--tall hero--inset">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow" data-edit="hero.eyebrow">{content.hero.eyebrow}</p>
            <h1 data-edit="hero.title">{content.hero.title}</h1>
            <p data-edit="hero.subtitle">{content.hero.subtitle}</p>
            <div className="btn-row">
              <Link href="/services" className="btn">Explore our services</Link>
              <Link href="/find-us" className="btn">Visit our shop</Link>
            </div>
            <span className="tag" data-edit="hero.locationTag">{content.hero.locationTag}</span>
          </div>
          <img
            className="hero-img"
            data-edit-image="hero.heroImage"
            src={content.hero.heroImage}
            alt="Basket of freshly folded laundry"
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">From drop-off to fresh</p>
          <h2>Simple from start to finish.</h2>
          <div className="steps">
            {content.steps.map((s, i) => (
              <div key={s.id} className="step">
                <span className="num" data-edit={`steps.${i}.id`}>{s.id}</span>
                <h3 data-edit={`steps.${i}.title`}>{s.title}</h3>
                <p data-edit={`steps.${i}.text`}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ... rest of your home page sections ... */}
    </>
  );
}
