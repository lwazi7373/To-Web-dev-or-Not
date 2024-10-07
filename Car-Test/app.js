require('dotenv').config();
require('express-async-errors');
//Get Express Module and Initialize the app using it
const Express = require('express');
const app = Express();

//Get the module reqired for the connection
const ConnectDB = require('./db/connect');

//Get thr routes
const CarRoutes = require('./routes/cars');

//Async Error Handling
const notFoundMiddleware = require('./middleware/notfound');
const errorMiddleware = require('./middleware/errorhandler');

app.set('view engine', 'ejs');
//Express defined middleware (Test out Json information)
app.use(Express.json());
//Serve up static files (HTML and CSS)
app.use(Express.static('public'));

//Serve the home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})
app.use(CarRoutes);

//To handle errors
app.use(notFoundMiddleware);
app.use(errorMiddleware);

//Port number server will run on
const PORT = process.env.PORT || 7000;

const start = async () => {
    try {
        await ConnectDB(process.env.MONGO_URI);
        app.listen(PORT, () => console.log(`Server is listening port ${PORT}...`));
    } catch (error) {
        console.log(error);
    }
}

//Run the function
start();

//Run url -> http://localhost:7000/ 