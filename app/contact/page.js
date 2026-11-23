import ContactContent from "../components/ContactContent";
import contactContent from "../../content/contact.json";

export const metadata = {
  title: "Contact",
  description: "Visit us at Kirigiti Center, near Todas Restaurant. Call, WhatsApp or send an inquiry.",
};

export default function ContactPage() {
  return <ContactContent content={contactContent} />;
}
