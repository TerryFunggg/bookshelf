const {
  TABLE_HEADER,
  haveSearchKeyWord,
  refectTableObjectToArray,
} = require("./helper");
const table = require("./tables");
const db = require("./db");
const question = require("./question");
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
      author: q.author,
      desc: q.desc,
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
