import ServicesContent from "../components/ServicesContent";
import servicesContent from "../../content/services.json";

export const metadata = {
  title: "Services",
  description: "Wash & fold, dry cleaning, duvets, curtains, carpets, ironing, shoe cleaning and more. Prices confirmed per item.",
};

export default function ServicesPage() {
  return <ServicesContent content={servicesContent} />;
}
