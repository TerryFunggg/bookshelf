const header = require("./header");
const usage = require("cli-usage");
const handler = require("./handler");
const db = require("./db");

const log = console.log;

module.exports = function (argv) {
  const command = require("./commands")(argv);
  db.init().catch((e) => log(e));
  let m = {};

  function help() {
    log(header("BookShelf"));
    log(usage.get("./app/help.md"));
    process.exit();
  }

  m.checkHelp = function () {
    if (command.helpRules.some((check) => check(argv))) {
      help();
    }
  };

  m.run = function () {
    if (command.addBook) {
      const title = argv["a"] || argv["_"][1];
      handler.addBook(title);
    }

    if (command.listBook) {
      const keywords = argv["l"] || argv["_"][1];
      handler.searchBook(keywords);
    }

    if (command.updateBook) {
      const id = argv["u"] || argv["_"][1];
      handler.updateBook(id);
    }

    if (command.deleteBook) {
      const id = argv["d"] || argv["_"][1];
      handler.deleteBook(id);
    }
  };
  return m;
};
