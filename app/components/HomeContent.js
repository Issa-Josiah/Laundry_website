import Link from "next/link";
import ServiceCarousel from "../about/ServiceCarousel";

const EMPTY_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 420'%3E%3Crect width='640' height='420' fill='%23f1f5f9'/%3E%3Ctext x='320' y='210' text-anchor='middle' font-size='65' fill='%2394a3b8'%3E%2B%3C/text%3E%3C/svg%3E";

export default function HomeContent({
  content,
  showEmptyImageSlots = false,
}) {
  const hasHeroImage =
    typeof content.hero.heroImage === "string" &&
    content.hero.heroImage.trim() !== "";

  return (
    <>
      <section className="hero hero--tall hero--inset">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow" data-edit="hero.eyebrow">
              {content.hero.eyebrow}
            </p>

            <h1 data-edit="hero.title">{content.hero.title}</h1>

            <p data-edit="hero.subtitle">{content.hero.subtitle}</p>

            <div className="btn-row">
              <Link href="/services" className="btn">
                Explore our services
              </Link>

              <Link href="/find-us" className="btn">
                Visit our shop
              </Link>
            </div>

            <span className="tag" data-edit="hero.locationTag">
              {content.hero.locationTag}
            </span>
          </div>

          {(hasHeroImage || showEmptyImageSlots) && (
            <div className="admin-image-wrap">
              <img
                className="hero-img"
                data-edit-image="hero.heroImage"
                src={hasHeroImage ? content.hero.heroImage : EMPTY_IMAGE}
                alt="Basket of freshly folded laundry"
              />
            </div>
          )}
        </div>
      </section>

      {/* Featured Services */}
      <section className="section section-alt">
        <div className="container">
          <ServiceCarousel
            services={content.featuredServices || []}
            editable={showEmptyImageSlots}
            showEmptyImageSlots={showEmptyImageSlots}
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
                <span className="num" data-edit={`steps.${i}.id`}>
                  {s.id}
                </span>

                <h3 data-edit={`steps.${i}.title`}>
                  {s.title}
                </h3>

                <p data-edit={`steps.${i}.text`}>
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
}
