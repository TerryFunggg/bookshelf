const chalk = require("chalk");
const _ = require("lodash");

const TABLE_HEADER = ["ID", "Title", "Read on", "Status"];

const BOOK_STATUS = {
  HOLD: "hold",
  READING: "reading",
  DONE: "done",
};

function getStatusColor(status) {
  switch (status.toLowerCase()) {
    case BOOK_STATUS.HOLD:
      return chalk.gray.bgYellow(status);
    case BOOK_STATUS.READING:
      return chalk.gray.bgCyan(status);
    case BOOK_STATUS.DONE:
      return chalk.gray.bgGreenBright(status);
  }
}

function haveSearchKeyWord(keyword) {
  return !(keyword == undefined || keyword === true);
}

function refectTableObjectToArray(accumulator, value) {
  let r = [];
  _.forEach(value, function (v, k) {
    if (k == "status") {
      v = getStatusColor(v);
    }
    r.push(v);
  });
  accumulator.push(r);
  return accumulator;
}

module.exports = {
  TABLE_HEADER,
  haveSearchKeyWord,
  refectTableObjectToArray,
};
