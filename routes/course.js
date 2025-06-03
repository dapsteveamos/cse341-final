const express = require('express');
const validation = require('../middleware/validator.js');
const { isAuthenticated } = require('../middleware/authenticate.js');
const router = express.Router();

const contactsController = require('../controllers/course.js');

router.get('/', );
router.get('/:id', );
router.post('/', )
router.put('/:id', );
router.delete('/:id', );

module.exports = router;