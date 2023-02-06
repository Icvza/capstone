import mysql from "mysql"
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const dbConnection = await mysql.createConnection({
        host: "database-1.cgfpjcceic14.us-east-1.rds.amazonaws.com",
        user: "admin",
        password: "password",
        database: "platea_planner",
    });
    try {
        let email = req.query.email;
        console.log(email);

        //Create a query to check if the email exisit in the table if not {}
        const q = (`INSERT INTO Email (email) VALUES ('${email}')`);
        dbConnection.query(q, (err, data) => {
            if (err) return res.json(err);
            res.send(200)  
            ;
        });
        //if yes then send(some failure message MAKE IT A FAILURE )
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

