const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', controllers.allSkills);
router.get('/:id', controllers.allSkills);
router.post('/', controllers.createSkill);
router.put('/:id', controllers.updateSkill);
router.delete('/:id', controllers.deleteSkill);

module.exports = router;
