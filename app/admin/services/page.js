"use client";

import { AdminEditor } from "next-inline-editor";
import servicesContent from "../../../content/services.json";
import ServicesContent from "../../components/ServicesContent";

export default function AdminServices() {
  return (
    <AdminEditor
      initialContent={servicesContent}
      contentFile="content/services.json"
      pageLabel="Services"
    >
      {(content) => (
        <ServicesContent
          content={content}
          showEmptyImageSlots={true}
        />
      )}
    </AdminEditor>
  );
}
