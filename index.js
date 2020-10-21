let argv = require('minimist')(process.argv.slice(2));
let app = require('./app')(argv);

// run app
app.checkHelp();
app.run();

/**
 * Data structure
 * id   : book id
 * name : book name
 * page : index of read page
 * state : HOLD READING DONE
 */
