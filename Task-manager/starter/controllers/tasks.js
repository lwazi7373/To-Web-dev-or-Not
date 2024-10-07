//We use the Schema in the Controllers
const Task = require('../models/task')
//Functionality to get all the tasks available
const getAllTasks = async (req,res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg: error});
    }
}
//Functionality to create a new task
const createTask = async (req,res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task});
    } catch (error) {
        res.status(500).json({msg: error})
    }
}
//Functionality to get a single task
const getTask = async (req,res) => {
    try {
        const {id: TaskID} = req.params;
        const task = await Task.findOne({_id: TaskID});
        if(task == null){
            return res.status(404).json({ msg: `No task with ID: ${TaskID}`});
        }
        res.status(202).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}
//Functionality to update a  task
const updateTask = async (req,res) => {
   try {
       const {id:TaskID} = req.params;
       const task = await Task.findOneAndUpdate({_id:TaskID},req.body,{
            new:true,
            runValidators:true
       })
       if(task == null){
          return res.status(404).json({ msg: `No task with ID: ${TaskID}`});
       }
       res.status(200).json({task})
   } catch (error) {
        res.status(500).json({msg: error})
   }
}
//Functionality to delete a task
const deleteTask = async (req,res) => {
    try {
        const {id:TaskID} = req.params;
        const task = await Task.findOneAndDelete({_id:TaskID})
        if(task == null){
            return res.status(404).json({ msg: `No task with ID: ${TaskID}`});
        }
        res.status(202).json({task})   
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

//Export all the functions to routers/tasks.js 
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}