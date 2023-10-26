const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/:model', controllers.listController);

module.exports = router;