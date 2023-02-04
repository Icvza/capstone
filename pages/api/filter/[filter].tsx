



import mysql from "mysql"
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
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
        const q = (`

        SELECT * FROM platea_lugares WHERE 
        nombre = '${req.query.filter}' OR
        area = '${req.query.filter}' OR
        FIND_IN_SET('${req.query.filter}', categoria) > 0 OR
        FIND_IN_SET('${req.query.filter}', extras) > 0 OR
        FIND_IN_SET('${req.query.filter}', detalles) > 0

    `);
        dbConnection.query(q, (err, data) => {
            if (err) return res.json(err);
            return res.json(data);
        });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}


