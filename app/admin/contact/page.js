"use client";
import { AdminEditor } from "next-inline-editor";
import contactContent from "../../../content/contact.json";
import ContactContent from "../../../app/components/ContactContent";

export default function AdminContact() {
  return (
    <AdminEditor initialContent={contactContent} contentFile="content/contact.json" pageLabel="Contact">
      {(content) => <ContactContent content={content} />}
    </AdminEditor>
  );
}
