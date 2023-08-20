import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (req.body.title === "") {
      return res.status(500).json("제목 적으셔야합니다");
    }
    try {
      const client = await connectDB;
      const db = client.db("forum");
      await db.collection("post").insertOne(req.body);
      res.status(200).redirect(302, "/list");
    } catch (error) {
      console.log(error);
    }
  }
}
