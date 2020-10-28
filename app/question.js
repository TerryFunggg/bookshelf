const inquirer = require("inquirer");

module.exports = {
  forAddBook: () => {
    const questions = [
      {
        name: "page",
        type: "input",
        message: "Bookmark on? (type 0, if you not ready read it)",
        validate: function (value) {
          if (!isNaN(value) && value >= 0) {
            return true;
          } else {
            return "Please enter positive number.";
          }
        },
      },
      {
        name: "status",
        type: "list",
        message: "Select one status for this",
        choices: ["HOLD", "READING", "DONE"],
      },
    ];
    return inquirer.prompt(questions);
  },
};
