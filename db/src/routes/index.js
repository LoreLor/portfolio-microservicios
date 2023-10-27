const { Router } = require('express');
const controllers = require('../controllers');
const middleware = require('../middleware')
const router = Router();

router.get('/:model', controllers.listController);
router.get('/:model/:id', controllers.getByIdController)
router.post('/:model', middleware.modelsValidation, controllers.insertController);
router.put('/:model/:id', middleware.modelsValidation, controllers.updateController);

module.exports = router;