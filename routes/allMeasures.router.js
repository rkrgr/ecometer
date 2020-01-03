const router = require('express').Router();

const allMeasuresController = require('../controller/allMeasures.controller');

router.get('/', allMeasuresController.index);

module.exports = router;