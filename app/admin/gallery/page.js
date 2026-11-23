"use client";

import { AdminEditor } from "next-inline-editor";
import galleryContent from "../../../content/gallery.json";
import AdminGalleryContent from "../../components/AdminGalleryContent";

export default function AdminGallery() {
  return (
    <AdminEditor
      initialContent={galleryContent}
      contentFile="content/gallery.json"
      pageLabel="Gallery"
    >
      {(content) => (
        <AdminGalleryContent content={content} />
      )}
    </AdminEditor>
  );
}
