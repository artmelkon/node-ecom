const path = require('path');
const express = require('express');
const rootDir = require('../utils/path');
const outputController = require('../controller/output');

const router = express.Router();


router.get('/', outputController.getProductOutput);

// router.get('/', (req, res, next) => {
//   // res.sendFile(path.join(__dirname, '..', 'views', 'output.html')); // using "__dirname, '../" is omitted in new version
//   // res.sendFile(path.join(rootDir, 'views', 'output.html')); // routing method for static pages
//   res.render('output', {
//     pageTitle: 'Output',
//     path: '/'
//   })
// });

module.exports = router;