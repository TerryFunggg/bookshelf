const chalk = require("chalk");
const figlet = require("figlet");

module.exports = (title) => {
  return chalk.yellow(
    figlet.textSync(title, {
      horizontalLayout: "full",
    })
  );
};
