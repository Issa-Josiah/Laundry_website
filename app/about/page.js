import AboutContent from "../components/AboutContent";
import aboutContent from "../../content/about.json";

export const metadata = {
  title: "About Us",
  description: "Good care starts close to home. King's DryCleaners serves Kirigiti Center with laundry, dry-cleaning and home fabric care.",
};

export default function AboutPage() {
  return <AboutContent content={aboutContent} />;
}
