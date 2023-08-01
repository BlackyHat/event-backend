const Event = require('../../models/eventModel');
const { AppError } = require('../../utils');

const updateEvent = async (eventId, updatedEvent) => {
  const event = await Event.findOneAndUpdate(
    { _id: eventId },
    { $set: updatedEvent },
    { new: true }
  );
  if (!event) {
    throw new AppError(404, `Task with id=${eventId} not found`);
  }

  return event;
};

module.exports = updateEvent;
