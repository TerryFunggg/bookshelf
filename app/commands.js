const _ = require("lodash");

module.exports = function (argv) {
  function isEmptyCommand(argv){
    return argv["_"].length == 0 && 
            Object.keys(argv).length == 1;
  }

  function commandFactory(argv, alias, command) {
    return argv[`${alias}`] != undefined || 
            argv["_"].includes(`${command}`);
  }

  const command = _.partial(commandFactory, argv);

  return {
    helpRules: [isEmptyCommand, () => command("h","help")],
    addBook:    command("a", "add"),
    listBook:   command("l", "list"),
    updateBook: command("u", "update"),
    deleteBook: command("d", "delete"),
  };
};
