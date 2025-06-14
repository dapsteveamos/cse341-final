const express = require('express');
const validation = require('../middleware/validator.js');
const { isAuthenticated } = require('../middleware/authenticate.js');
const router = express.Router();

const teacherController = require('../controllers/teacher.js');

const teacherValidationRules = {
    name: 'required|string|min:3',
    email: 'required|email',
    subject: 'required|string|min:2'
};

router.get('/', isAuthenticated, teacherController.getAll);

router.get('/:id', isAuthenticated, teacherController.getSingle);

router.post(
    '/',
    isAuthenticated,
    validation.validate(teacherValidationRules),
    teacherController.createTeacher
);

router.put(
    '/:id',
    isAuthenticated,
    validation.validate(teacherValidationRules),
    teacherController.updateTeacher
);

router.delete('/:id', isAuthenticated, teacherController.deleteTeacher);

module.exports = router;