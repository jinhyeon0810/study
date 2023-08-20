import DetailLink from "@/util/DetailLink";
import { connectDB } from "@/util/database";
import Link from "next/link";
import React from "react";
import Listitem from "./Listitem";

export default async function List() {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);
  console.log(result[0]._id);
  return (
    <div className="list-bg">
      <Listitem result={result} />
      <DetailLink />
    </div>
  );
}
