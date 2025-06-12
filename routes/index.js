const express = require('express');
const router = express.Router();

const isAuthenticated = require('../middleware/isAuthenticated');

// router.get('/', (req, res) => { 
//     //#swagger.tags=['Hello World']
//     res.send('Hello World');
// });

// router.use('/products', isAuthenticated, require('./products'));

// router.use('/stores', isAuthenticated, require('./stores'));

router.get('/', isAuthenticated, (req, res) => {
  res.send('Welcome to the Products API');
});

router.use('/course', require('./course'));

router.use('/semester', require('./semester'));

router.use('/student', require('./student'));

router.use('/teacher', require('./teacher'));

router.use('/user', require('./user'));



module.exports = router;
