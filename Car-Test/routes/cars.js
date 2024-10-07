const Express = require('express');
const router = Express.Router();
const Cars = require('../controllers/cars');

router.route('/Cars').get(Cars.getAllCars);
router.route('/Cars/Car').get(Cars.getACar);

module.exports = router;
