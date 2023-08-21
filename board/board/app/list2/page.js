import DetailLink from "@/util/DetailLink";
import { connectDB } from "@/util/database";
import React from "react";
import Listitem from "./Listitem";

export const revalidate = 10;

export default async function List() {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);
  return (
    <div className="list-bg">
      <Listitem result={result} />
      <DetailLink />
    </div>
  );
}
