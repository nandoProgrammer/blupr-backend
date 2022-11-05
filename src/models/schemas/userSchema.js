const Joi = require('joi');

module.exports = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

    password: Joi.string()
        .pattern(/^[a-zA-Z0-9]{3,30}$/),

    dateBirth: Joi.number()
        .integer()
        .min(1900)
        .max(2001)
});