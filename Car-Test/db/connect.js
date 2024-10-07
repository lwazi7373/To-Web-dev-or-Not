//Request the mongoose module
const Mongoose = require('mongoose');

//create a function that takes in a URL and then returns a connection to the url, that will be passed in
const ConnectDB = (url) => {
  return Mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}
//Export the function
module.exports = ConnectDB;