const express = require('express');
const validation = require('../middleware/validator.js');
const { isAuthenticated } = require('../middleware/authenticate.js');
const router = express.Router();

const userController = require('../controllers/user.js');

const userValidationRules = {
    username: 'required|string|min:3',
    email: 'required|email',
    password: 'required|string|min:6'
};

router.get('/', isAuthenticated, userController.getAll);

router.get('/:id', isAuthenticated, userController.getSingle);

router.post('/', isAuthenticated, validation.validate(userValidationRules), userController.createUser);

router.put('/:id', isAuthenticated, validation.validate(userValidationRules), userController.updateUser);

router.delete('/:id', isAuthenticated, userController.deleteUser);

module.exports = router;
