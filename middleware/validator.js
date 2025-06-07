const validator = require('../helpers/validate.js');

const checkValidate = (rules) => {
    return (req, res, next) => {
        validator(req.body, rules, {}, (err, status) => {
            if (!status) {
                res.status(422).json({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
            } else {
                next();
            }
        });
    };
};

const teacherRules = () => {
    return {
        firstName: 'required|string',
        lastName: 'required|string',
        email: 'required|email',
        department: 'required|string',
        hireDate: 'required|date'
    };
};

module.exports = {
    checkValidate,
    teacherRules
};
