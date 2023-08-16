import { connectDB } from "@/util/database";
import Link from "next/link";
import React from "react";

export default async function List() {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);
  console.log(result[0]._id);
  return (
    <div className="list-bg">
      {result.map((data, i) => {
        return (
          <Link href={`/detail/${data._id.toString()}`}>
            <div className="list-item" key={i}>
              <h4>{data.title}</h4>
              <p>1월 1일</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
