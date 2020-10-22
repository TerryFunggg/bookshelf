const inquirer = require('inquirer');

module.exports = {
  forAddBook: (title) => {
    const questions = [
      {
        name: 'page',
        type: 'input',
        message: 'Which page do you want to bookmark (type 0, if you not ready read it)',
        validate: function( value ) {
          if (!isNaN(value) && value >= 0) {
            return true;
          } else {
            return 'Please enter positive number.';
          }
        }
      },
      {
        name: 'status',
        type: 'list',
        message: 'Please choose one status for this book.',
        choices:[
            "HOLD",
            "READING",
            "DONE"
        ],
      }
    ];
    return inquirer.prompt(questions);
  },
};