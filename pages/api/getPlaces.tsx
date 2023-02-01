import mysql from "mysql";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const dbConnection = await mysql.createConnection({
    host: "127.0.0.1",
    database: "platea_planner",
    user: "devuser",
    password: "Y16road2hire",
  });
  try {
    const q = "SELECT * FROM platea_lugares";
    dbConnection.query(q, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
