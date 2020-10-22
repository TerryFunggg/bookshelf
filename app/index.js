const header = require('./header');
let usage = require('cli-usage');
const handler = require('./handler');
const log = console.log;

module.exports = function(argv){
    const command = require('./commands')(argv);
    let m = {};

    function help(){
        log(header('BookShelf'));
        log(usage.get('./app/help.md'));
        process.exit();
    }

    m.checkHelp = function(){
        if(command.helpRules.some((check)=>check(argv))){
           help();
        }
    }

    m.run =  function(){
        try{
            if(command.addBook){
                const title = argv["a"] || argv["_"][1];
                if(title == undefined) throw Error("Title not Input");
                handler.addBook(title);
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
        }catch(e){
          help();
        }
    }
    return m;
}