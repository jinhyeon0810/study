import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  console.log(req.body._id);
  if (req.method === "POST") {
    if (req.body.title === "" || req.body.content === "") {
      return res.status(500).json("빈칸을 채워주세요");
    }
    try {
      let newSet = { title: req.body.title, content: req.body.content };
      const client = await connectDB;
      const db = client.db("forum");
      await db.collection("post").updateOne({ _id: new ObjectId(req.body._id) }, { $set: newSet });
      res.status(200).redirect(302, "/list");
    } catch (error) {
      return res.status(500).json("server error");
    }
  }
}
