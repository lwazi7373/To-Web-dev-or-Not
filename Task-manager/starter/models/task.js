const Mongoose = require("mongoose");

//Set up the structure of the documents in the Database Collections
const TaskSchema = new Mongoose.Schema({
    //Validation for the Schema (big Topic, with more info)
    name: {
        //it must be type String and it must be provided and name must be at most 20 characters
        type:String,
        required:[true,'Must Provide Name'],
        trim:true,
        maxlength:[20,'Name must be at most 20 characters']
    },
    //Before the use adds the task to do, it has to be "not completed"
    completed: {
        type:Boolean,
        default : false
    }
})

module.exports = Mongoose.model('Task',TaskSchema)