import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "DELETE") {
    try {
      const client = await connectDB;
      const db = client.db("forum");
      let result = await db.collection("post").deleteOne({ _id: new ObjectId(req.body) });
      res.status(200).json("삭제완료");
    } catch (error) {
      res.status(500).json("server error");
    }
  }
}
