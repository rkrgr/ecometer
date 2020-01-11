const router = require('express').Router();

const measuresController = require('../controller/measures.controller');

//router.get('/', measuresController.index);
router.get('/', measuresController.allMeasures);


router.get('/createMeasures', measuresController.createMeasures);
router.post('/createMeasures', measuresController.measure_insert);




module.exports = router;


