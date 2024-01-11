// imports ================================================== //
import mysql from "serverless-mysql";
import type { ExecuteQuery } from "./types";

// constants ================================================ //
const DATA_BASE = mysql({
    config: {
        host: process.env.MYSQL_HOST,
        // port: process.env.MYSQL_PORT,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD
    },
})

// main ===================================================== //
export const executeQuery: ExecuteQuery = async function ({ query, values }) {
    try {
        const result = await DATA_BASE.query(query, values);
        await DATA_BASE.end();
        return result;
    } catch (error) {
        return { error };
    }
}