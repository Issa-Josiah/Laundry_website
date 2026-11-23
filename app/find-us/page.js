import FindUsContent from "../components/FindUsContent";
import findUsContent from "../../content/find-us.json";

export const metadata = {
  title: "Find Us",
  description: "Find King's DryCleaners and Laundry at Kirigiti Center, along Kirigiti Riabai Road, near Todas Restaurant. Call us if you get lost.",
};

export default function FindUsPage() {
  return <FindUsContent content={findUsContent} />;
}
