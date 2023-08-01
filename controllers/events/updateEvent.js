const { catchAsync } = require('../../utils');

const { updateEvent } = require('../../services/eventsServices');

const updateEventController = catchAsync(async (req, res) => {
  const { eventId } = req.params;
  const { body: updatedEvent } = req;

  const event = await updateEvent(eventId, updatedEvent);
  res.status(200).json({ message: 'Success. Event data updated.', event });
});

module.exports = updateEventController;
