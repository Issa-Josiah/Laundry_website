"use client";
import { AdminEditor } from "next-inline-editor";
import aboutContent from "../../../content/about.json";
import AboutContent from "../../../app/components/AboutContent";

export default function AdminAbout() {
  return (
    <AdminEditor initialContent={aboutContent} contentFile="content/about.json" pageLabel="About">
      {(content) => <AboutContent content={content} />}
    </AdminEditor>
  );
}
