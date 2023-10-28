const { Router } = require('express');
const middleware = require('../middleware');

const controllers = require('../controllers');

const router = Router();

router.post('/', middleware.userValidation, controllers.userCreate);

module.exports = router;
