const {
  TABLE_HEADER,
  haveSearchKeyWord,
  refectTableObjectToArray,
} = require("./helper");
const table = require("./tables");
const db = require("./db");
const question = require("./question");
const { isBoolean } = require("lodash");
const log = console.log;

exports.addBook = async (title) => {
  try {
    if (title == undefined) {
      log("You should input the book name");
      return;
    }
    let q = await question.forAddBook();
    let item = {
      title: title,
      page: q.page,
      status: q.status,
    };
    await db.insertBook(item);
  } catch (e) {
    log(e);
  }
};

exports.searchBook = async (keyword) => {
  try {
    let result;
    if (haveSearchKeyWord(keyword)) {
      result = await db.searchBook(keyword);
    } else {
      result = await db.searchBook();
    }

    if (result == undefined) {
      log("No result");
      return;
    }

    result = result.reduce(refectTableObjectToArray, [TABLE_HEADER]);

    log(table.draw(result));
  } catch (e) {
    log(e);
  }
};

exports.updateBook = async (id) => {
  try {
    if (id == undefined || isBoolean(id) || isNaN(id))
      throw "You should input the book id";

    let q = await question.forUpdateBook();
    let item = {
      id: id,
      title: q.title,
      page: q.page,
      status: q.status,
    };
    log(await db.updateBook(item));
  } catch (e) {
    log(e);
  }
};

exports.deleteBook = async (id) => {
  try {
    if (id == undefined || isBoolean(id) || isNaN(id))
      throw "You should input the book id";
    // TODO: mybe support multiple delete?
    log(await db.deleteBook(id));
  } catch (e) {
    log(e);
  }
};
