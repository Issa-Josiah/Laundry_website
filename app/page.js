import HomeContent from "./components/HomeContent";
import homeContent from "../content/home.json";

export const metadata = {
  title: "Home",
  description:
    "You wear it, we care for it. Laundry, dry-cleaning, carpets, duvets, curtains and fumigation at Kirigiti Center.",
};

export default function Home() {
  return <HomeContent content={homeContent} />;
}
