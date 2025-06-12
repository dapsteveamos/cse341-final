const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.js');

const userValidationRules = {
  name: 'required|string|min:3',
  email: 'required|email',
  age: 'required|string|min:1',
};

router.get('/',  userController.getAll);

router.get('/:id', userController.getSingle);

router.post(
  '/',
  userController.createUser
);

router.put(
  '/:id',
  userController.updateUser
);

router.delete('/:id', userController.deleteUser);

module.exports = router;
