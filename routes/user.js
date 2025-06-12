const express = require('express');
const validation = require('../middleware/validator.js');
const { isAuthenticated } = require('../middleware/authenticate.js');
const router = express.Router();

const userController = require('../controllers/user.js');

const userValidationRules = {
    name: 'required|string|min:3',
    email: 'required|email',
    age: 'required|string|min:1'
};

router.get('/', isAuthenticated, userController.getAll);

router.get('/:id', isAuthenticated, userController.getSingle);

router.post('/', isAuthenticated, validation.checkValidate(userValidationRules), userController.createUser);

router.put('/:id', isAuthenticated, validation.checkValidate(userValidationRules), userController.updateUser);

router.delete('/:id', isAuthenticated, userController.deleteUser);

module.exports = router;
