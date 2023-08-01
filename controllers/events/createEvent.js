const { catchAsync } = require('../../utils');

const { addEvent } = require('../../services/eventsServices');

const createEventController = catchAsync(async (req, res, next) => {
  const { body: newEvent } = req;

  const event = await addEvent(newEvent);
  res.status(201).json({ message: 'Success. Event was created.', event });
});

module.exports = createEventController;
