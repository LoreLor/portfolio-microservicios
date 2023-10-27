const { Router } = require('express');
const controllers = require('../controllers');


const router = Router();

router.get('/', controllers.allProjects);
router.get('/:id', controllers.projectById);
router.post('/', controllers.createProject);
router.put('/:id', controllers.updateProject);

module.exports = router;