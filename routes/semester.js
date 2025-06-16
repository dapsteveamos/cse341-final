const express = require('express');
const validation = require('../middleware/validator.js');
const { validateSemester } = require('../middleware/semesterValidation.js');
const { isAuthenticated } = require('../middleware/authenticate.js');
const router = express.Router();
const semesterController = require('../controllers/semester.js');

router.get('/', semesterController.getAll);

router.post('/', validateSemester, semesterController.createSemester);

router.get('/:id', semesterController.getSingle);

router.put('/:id', validateSemester, semesterController.updateSemester);

router.delete('/:id', semesterController.deleteSemester);

module.exports = router;
