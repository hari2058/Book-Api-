import { createConnection } from "mysql2/promise";

 export async function appDbConnection() {
  const mysqlDb = await createConnection({
    user: "root",
    password: "Password@123",
    port: 3306,
    host: "localhost",
    database: "book_app"
  });

  return mysqlDb;
}

async function getAllDatabase () {
    const db = await appDbConnection();
    const result = await db.query(`SHOW DATABASES`);
    console.log("result", result);
}

getAllDatabase();
