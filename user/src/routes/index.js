const { Router } = require('express');
const middleware = require('../middleware');

const controllers = require('../controllers');

const router = Router();

router.get('/', controllers.allUsers);
router.post('/', middleware.userValidation, controllers.userCreate);
router.get('/:id', controllers.userById);

module.exports = router;
