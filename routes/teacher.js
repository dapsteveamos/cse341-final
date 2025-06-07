const express = require('express');
const validation = require('../middleware/validator.js');
const { isAuthenticated } = require('../middleware/authenticate.js');
const router = express.Router();

const teacherController = require('../controllers/teacher.js');

router.get('/', teacherController.getAll);
router.get('/:id', teacherController.getSingle);
router.post('/', validation.teacherRules(), validation.checkValidate, isAuthenticated, teacherController.createTeacher);
router.put('/:id', validation.teacherRules(), validation.checkValidate, isAuthenticated, teacherController.updateTeacher);
router.delete('/:id', isAuthenticated, teacherController.deleteTeacher);

module.exports = router;