const path = require('path');
const express = require('express');
const rootDir = require('../utils/path');
const inputController = require('../controller/input');

const router = express.Router();

router.get('/add-product', inputController.getInputProduct);

router.post('/add-product', inputController.postInputProduct);

module.exports = router;