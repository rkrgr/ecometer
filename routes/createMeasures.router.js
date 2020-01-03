const router = require('express').Router();

const createMeasuresController = require('../controller/allMeasures.controller');

router.get('/', createMeasuresController.index);

module.exports = router;