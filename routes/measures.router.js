const router = require('express').Router();

const measuresController = require('../controller/measures.controller');

router.get('/', measuresController.index);

module.exports = router;


