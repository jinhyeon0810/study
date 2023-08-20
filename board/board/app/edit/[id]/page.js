import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import React from "react";

export default async function Edit(props) {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").findOne({ _id: new ObjectId(props.params.id) });
  console.log(result);
  return (
    <div className="p-20">
      <h4>수정페이지</h4>
      <form action="/api/post/edit" method="POST">
        <input name="title" defaultValue={`${result.title}`} />
        <input name="content" defaultValue={`${result.content}`} />
        <input style={{ display: "none" }} name="_id" defaultValue={`${props.params.id}`} />
        <button type="submit">수정하기</button>
      </form>
    </div>
  );
}
