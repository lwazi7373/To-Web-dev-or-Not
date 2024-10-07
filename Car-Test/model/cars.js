//Request the mongoose module
const Mongoose = require('mongoose');

//Define the Schema for the car and then pass it to carSchema
const carSchema = new Mongoose.Schema({
    //This is the defined Schema, with validation and custom error messages
    //Not sure if the will be necessary, considering that the user will click a link as a request for the car
    name:{
        type:String,
        required: [true, "Name Must be provided"]
    },
    image:{
        type:String,
        required: [true, "Image url, Must be provided"]
    },
    model:{
        type:String,
        maxlength: [20, "Color Must be less that 20 characters"]
    },
    price:{
        type: Number,
        required: ['Price must be a Number']
    },
    color:{
        type: String,
        maxlength: [20, "Color Must be less that 20 characters"]
    },
    available:{
        type:Boolean,
        default : false
    }
})
//Exoprt the carSchema
module.exports = Mongoose.model('car',carSchema);