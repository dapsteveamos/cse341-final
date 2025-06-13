const express = require('express');
const validation = require('../middleware/validator.js');
const { isAuthenticated } = require('../middleware/authenticate.js');
const router = express.Router();

const semesterController = require('../controllers/semester.js');

router.post('/', (req, res, next) => {
    const rules = {
        year: 'required|digits:4',
        semesterSeason: 'required|in:Fall,Winter,Spring,Summer',
        semesterStart: 'required|date',
        semesterEnd: 'required|date'
    };

    validation(req.body, rules, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
}, semesterController.createSemester);

router.put('/:id', (req, res, next) => {
    const rules = {
        year: 'required|digits:4',
        semesterSeason: 'required|in:Fall,Winter,Spring,Summer',
        semesterStart: 'required|date',
        semesterEnd: 'required|date'
    };

    validation(req.body, rules, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
}, semesterController.updateSemester);

router.get('/', semesterController.getAll);
router.get('/:id', semesterController.getSingle);
router.post('/', semesterController.createSemester);
router.put('/:id', semesterController.updateSemester);
router.delete('/:id', semesterController.deleteSemester);

module.exports = router;