import { siteData as d } from "../../data/mockData";

export const metadata = {
  title: "About Us",
  description:
    "Good care starts close to home. King's DryCleaners serves Kirigiti Center with laundry, dry-cleaning and home fabric care.",
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="about-grid">
          <img src={d.about.image} alt="Wash, Dry, Fold sign" />
          <div>
            <p className="eyebrow">{d.about.eyebrow}</p>
            <h2>{d.about.title}</h2>
            <p>{d.about.text}</p>
            <p className="highlight">{d.about.highlight}</p>
            <p>{d.about.text2}</p>
          </div>
        </div>

        <h2 style={{ marginTop: 56 }}>Simple from drop-off to fresh.</h2>
        <div className="steps">
          {d.steps.map((s) => (
            <div key={s.id} className="step">
              <span className="num">{s.id}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
