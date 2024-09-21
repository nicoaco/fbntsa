const express = require('express');
const path = require('path');
const router = express.Router();
const mainController = require('../controllers/mainController');


router.get('/', mainController.index);
router.get('/contact', mainController.contact);
router.get('/about', mainController.about);
//router.get('/services', mainController.services);
//router.get('/blog', mainController.blog);

module.exports = router;