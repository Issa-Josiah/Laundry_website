"use client";
import { AdminEditor } from "next-inline-editor";
import homeContent from "../../../content/home.json";
import HomeContent from "../../../app/components/HomeContent";

export default function AdminHome() {
  return (
    <AdminEditor initialContent={homeContent} contentFile="content/home.json" pageLabel="Home">
      {(content) => <HomeContent content={content} />}
    </AdminEditor>
  );
}
