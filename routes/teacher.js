const express = require('express');
const validation = require('../middleware/validator.js');
const { isAuthenticated } = require('../middleware/authenticate.js');
const router = express.Router();

const teacherController = require('../controllers/teacher.js');

// router.get('/', );
// router.get('/:id', );
// router.post('/', )
// router.put('/:id', );
// router.delete('/:id', );

module.exports = router;