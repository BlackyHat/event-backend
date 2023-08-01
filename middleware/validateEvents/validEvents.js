const { catchAsync, AppError } = require('../../utils');
const { validateEvent } = require('../../utils/Joi');

const validEvents = catchAsync(async (req, res, next) => {
  const { title, description, location, category, date, time } = req.body;

  if (!title && !description && !location && !category && !date && !time) {
    return next(new AppError(400, 'missing required field'));
  }

  const { error, value } = validateEvent(req.body);

  if (error) {
    const errorMessage = error.details
      .map(({ message }) => message)
      .join(';   ');
    return next(new AppError(400, errorMessage));
  }
  req.body = value;
  next();
});

module.exports = validEvents;
