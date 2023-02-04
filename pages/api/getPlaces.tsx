import mysql from "mysql";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function dbHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const dbConnection = await mysql.createConnection({
    host: "database-1.cgfpjcceic14.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "password",
    database: "platea_planner",
  });
  try {
    const q = `SELECT * FROM platea_lugares`;
    dbConnection.query(q, (err: any, data: any) => {
      if (err) return res.json(err);
      res.status(200).json(data);
      dbConnection.end();
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
