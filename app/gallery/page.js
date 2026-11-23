import GalleryContent from "../components/GalleryContent";
import galleryContent from "../../content/gallery.json";

export const metadata = {
  title: "Gallery",
  description: "Freshly folded laundry, pressed garments and cleaning work from King's DryCleaners and Laundry.",
};

export default function GalleryPage() {
  return <GalleryContent content={galleryContent} />;
}
