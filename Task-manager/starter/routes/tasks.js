const Express = require("express");
const router = Express.Router(); //Set up the Router and invoke it

const theTasks = require('../controllers/tasks')

//Router for the getAllTask and create Task logic (chaining) => for those with '/'
router.route('/').get(theTasks.getAllTasks).post(theTasks.createTask)
//Router for the getAllTask and create Task logic (chaining) for those with '/:id'
router.route('/:id').get(theTasks.getTask).patch(theTasks.updateTask).delete(theTasks.deleteTask)

//Export the router
module.exports = router