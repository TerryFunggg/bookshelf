const log = console.log;

const { haveSearchKeyWord } = require("./helper");

const sqlite3 = require("sqlite3").verbose();
var sql = new sqlite3.Database("bookshelf");

let db = {};

db.init = function () {
  return new Promise((res, rej) => {
    sql.run(
      "CREATE TABLE IF NOT EXISTS books(" +
        "id INTEGER PRIMARY KEY AUTOINCREMENT," +
        "title VARCHAR(255)," +
        "page INTEGER," +
        "status VARCHAR(10)," +
        "create_at TEXT DEFAULT CURRENT_TIMESTAMP" +
        ")",
      function (result, err) {
        if (err) rej("Database Create fail..");
        res(result);
      }
    );
  });
};

db.insertBook = function (item) {
  return new Promise((res, rej) => {
    let stmt =
      `INSERT INTO books (title,page,status) ` +
      `VALUES ('${item.title}',${item.page || 0},'${item.status}')`;
    sql.run(stmt, function (result, err) {
      if (err) rej("Insert data fail...");
      res(result);
    });
  });
};

db.searchBook = function (keyword) {
  return new Promise((res, rej) => {
    let stmt = `SELECT id,title,page,status FROM books`;
    stmt = haveSearchKeyWord(keyword)
      ? stmt + ` WHERE title LIKE '%${keyword}%'`
      : stmt + " LIMIT 10";
    sql.all(stmt, function (err, row) {
      if (err) rej("Data not found");
      res(row);
    });
  });
};

db.selectAll = function () {
  return new Promise((res, rej) => {
    let stmt = "SELECT * FROM books";
    sql.all(stmt, function (err, row) {
      if (err) rej("No DB. Maybe you should add a book first");
      res(row);
    });
  });
};

module.exports = db;
