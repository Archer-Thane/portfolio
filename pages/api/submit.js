import { open } from "sqlite";
import sqlite3 from "sqlite3";

async function openDb() {
  return open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database,
  });
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const db = await openDb();
    const { name, email, message } = req.body;

    // Add validation here if needed

    await db.run(
      "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)",
      [name, email, message]
    );

    res.status(200).json({ message: "Message sent successfully" });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
