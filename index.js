let argv = require('minimist')(process.argv.slice(2));
let app = require('./app')(argv);

// run app
app.checkHelp();
app.run();
