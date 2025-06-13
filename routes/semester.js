const express = require('express');
const validation = require('../middleware/validator.js');
const { isAuthenticated } = require('../middleware/authenticate.js');
const router = express.Router();

const semesterController = require('../controllers/semester.js');

router.get('/', semesterController.getAll);
router.get('/:id', semesterController.getSingle);
router.post('/', semesterController.createSemester )
router.put('/:id', semesterController.updateSemester);
router.delete('/:id', semesterController.deleteSemester);

module.exports = router;