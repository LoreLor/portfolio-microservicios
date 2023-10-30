const { Router } = require('express');

const controllers = require('../controllers');
const middleware = require('../middleware');

const router = Router();

router.get('/', controllers.allUsers);
router.post('/', middleware.userValidation, controllers.userCreate);
router.get('/:id', controllers.userById);
router.put('/:id', middleware.userValidation, controllers.userUpdate);
router.delete('/:id', controllers.userDelete);
router.post('/signin', controllers.signin);

module.exports = router;
