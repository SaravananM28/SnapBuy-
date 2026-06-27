const express = require('express');
const { createOrder } = require('../controlers/orderController');

const router = express.Router()

router.route('/order').post(createOrder);

module.exports = router;