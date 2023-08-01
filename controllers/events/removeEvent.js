const { catchAsync } = require('../../utils');

const { removeEvent } = require('../../services/eventsServices');

const removeEventController = catchAsync(async (req, res) => {
  const { eventId } = req.params;

  const event = await removeEvent(eventId);
  res.status(200).json({ message: 'Success. Event was deleted.', event });
});

module.exports = removeEventController;
