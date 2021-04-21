const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateTodoInput(data) {
    let errors = {};

    data.task = validText(data.task) ? data.task : '';

    if (Validator.isEmpty(data.task)) {
        errors.task = 'Task field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};