"use client";
import { AdminEditor } from "next-inline-editor";
import findUsContent from "../../../content/find-us.json";
import FindUsContent from "../../../app/components/FindUsContent";

export default function AdminFindUs() {
  return (
    <AdminEditor initialContent={findUsContent} contentFile="content/find-us.json" pageLabel="Find Us">
      {(content) => <FindUsContent content={content} />}
    </AdminEditor>
  );
}
