const header = require('./header');
let usage = require('cli-usage');
const log = console.log;

module.exports = function(argv){
    const input = require('./rules')(argv);
    let m = {};

    m.checkHelp = function(){
        if(input.helpRules.some((check)=>check(argv))){
            log(header('BookShelf'));
            log(usage.get('./app/help.md'));
            process.exit();
        }
    }

    m.run = function(){
        // TODO: add book command
        if(input.addBook){
            log("adding book");
        }
        // TODO: list book command
        if(input.listBook){
            log("list book");
        }
        // TODO: update book command
        if(input.updateBook){
            log("update book");
        }
        // TODO: remove book
        if(input.deleteBook){
            log("delete book");
        }
    }

    return m;
}