const passport = require('passport');

const router = require('express').Router();

const swagger = require('../swagger');
router.use('/api-docs', swagger.serve, swagger.setup);

// router.get('/', (req, res) => { 
//     //#swagger.tags=['Hello World']
//     res.send('Hello World');
// });

router.use('/course', require('./course'));

router.use('/semester', require('./semester'));

router.use('/student', require('./student'));

router.use('/teacher', require('./teacher'));

router.use('/user', require('./user'));

router.get('/login', passport.authenticate('github'), (req, res) => {});

router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

module.exports = router;