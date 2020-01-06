const router = require('express').Router();

const createMeasuresController = require('../controller/createMeasures.controller');

router.get('/', createMeasuresController.index);

module.exports = router;