const Joi = require('joi');
const { eventsPriority } = require('../../constants');

const validateEvent = reqBody => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(250),
    description: Joi.string().min(3).max(250),
    location: Joi.string().min(3).max(250),
    category: Joi.string().min(3).max(250),
    date: Joi.string().min(3).max(250),
    time: Joi.string().min(3).max(250),
    imageURL: Joi.string().optional(),
    priority: Joi.string()
      .valid(...Object.values(eventsPriority))
      .optional(),
  });
  const validateResul = schema.validate(reqBody);
  return validateResul;
};
module.exports = validateEvent;
