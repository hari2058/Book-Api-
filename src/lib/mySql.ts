import { createConnection } from "mysql2/promise";

const mysqlDb = createConnection({
  user: "admin",
  password: "password@123",
  port: 3306,
  host: "localhost",
});
