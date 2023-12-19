const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

async function initializeDb() {
  const db = await open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL
    )
  `);

  console.log("Database initialized");
}

initializeDb().catch(console.error);
