const question = require('./question');
// TODO: Setting the local DB.

exports.addBook = async (title) => {
    // TODO: implement add book to db.
    let q = await question.forAddBook();
    console.log(q); 
}