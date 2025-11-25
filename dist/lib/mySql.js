"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = require("mysql2/promise");
async function appDbConnection() {
    const mysqlDb = await (0, promise_1.createConnection)({
        user: "admin",
        password: "password@123",
        port: 3306,
        host: "localhost",
    });
    return mysqlDb;
}
async function getAllDatabase() {
    const db = await appDbConnection();
    const result = await db.query(`SHOW DATABASE`);
    console.log("result", result);
}
getAllDatabase();
//# sourceMappingURL=mySql.js.map