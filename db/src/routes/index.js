const { Router } = require('express');
const controllers = require('../controllers');
const middleware = require('../middleware')
const router = Router();

router.get('/:model', controllers.listController);
router.post('/:model', middleware.modelsValidation, controllers.insertController);

module.exports = router;