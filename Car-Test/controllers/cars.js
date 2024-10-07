const car = require('../model/cars');

//Get All the Cars (/Cars)
const getAllCars = async (request,response) => {
    const cars = await car.find({}); //Get all the Cars from mongoose
    //Filtered page is on Cars page, so do the filtering in this route (/Cars => with user queries)
    /*
    const ReceivedQuery = request.query; //Get query
    const queryObject = {}; //Declare an empty object 
    if(ReceivedQuery.price){ //If the query is price (>or<)
        
    }
    if(ReceivedQuery.sort){ //If query is to sort, in some type of way

    }
    */
    response.render('cars', { cars }); //render the cars.ejs file
    
}

//Get a single Car (/Car?name=Audi)
const getACar = async (request,response) => {
    const carname_value = request.query.name; //Expects the query to be ?name=carname, e.g) ?name=Audi, that will be used to find specified car
    if(carname_value){
        const TheCar = await car.findOne({name: carname_value}); //Go ahead and find the car, by name, which is in carname_value
        response.render('Car', {car: TheCar});
    }
}   

module.exports = {
    getAllCars,
    getACar
};
