'use strict';
const express = require('express');
const router = express.Router();
const add = require('../controllers/manhole_add');
const check = require('../controllers/check_manhole');

//All routes.
router.get('/', (req, res) => { res.send('Welcome to HMWSSB') });
router.post('/addManhole', add.addManhole);
router.post('/overflow',check.checkOverflow);
router.post('/damage',check.checkDamage);

//Export the Router.
module.exports = router;
