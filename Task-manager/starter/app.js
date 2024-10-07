const Express = require("express"); //Import exress, that we will be using to build the API
const app = Express(); //Initialize the app, using Express
const tasks = require("./routes/tasks");//Import the routes from the tasks.js in routes folder

const connectDB = require('./db/connect'); //Import the function responsible for connecting to the database in mongoDB
require('dotenv').config()
//middleware
app.use(Express.static('./public')) //Run all the files in the public folder, their (HTML,CSS & JS)
app.use(Express.json()) //Deal with the json data in the body of the HTTP request

app.use('/api/v1/tasks/', tasks ) 

const port = 3000; //port numbrt the server is running on

//Only if the connection to the database was successful, you should then connect to the server
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}
start()
//Run URL -> http://localhost:3000/index.html 
