const router = require('express').Router();

const profileController = require('../controller/profile.controller');

router.get('/', profileController.profile);
router.post('/',profileController.updateProfile);

module.exports = router;