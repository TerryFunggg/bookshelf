const header = require('./header');
let usage = require('cli-usage');
const log = console.log;

module.exports = function(argv){
    const command = require('./commands')(argv);
    let m = {};

    m.checkHelp = function(){
        if(command.helpRules.some((check)=>check(argv))){
            log(header('BookShelf'));
            log(usage.get('./app/help.md'));
            process.exit();
        }
    }

    m.run = function(){
        // TODO: add book command
        if(command.addBook){
            log("adding book");
        }
        // TODO: list book command
        if(command.listBook){
            log("list book");
        }
        // TODO: update book command
        if(command.updateBook){
            log("update book");
        }
        // TODO: remove book
        if(command.deleteBook){
            log("delete book");
        }
    }

    return m;
}