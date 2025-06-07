const validator = require('../helpers/validate.js');

const validate = (rules) => {
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

module.exports = {
    validate
};
