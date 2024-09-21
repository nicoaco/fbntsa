const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/servicesController');


router.get('/', servicesController.services);
router.get('/:id', (req,res) => res.send('Bienvenido al servicio ' + req.params.id));

module.exports = router;