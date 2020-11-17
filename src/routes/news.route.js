// init
const express = require('express');
const router = express.Router();

// import news from controller
const newsController = require('../app/controllers/NewsController');

// newsController.index

router.use('/:slug', newsController.show);
router.use('/', newsController.index);

module.exports = router;