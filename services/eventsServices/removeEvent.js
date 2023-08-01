const Event = require('../../models/eventModel');
const { AppError } = require('../../utils');

const removeEvent = async eventId => {
  const removedEvent = await Event.findOneAndRemove({
    _id: eventId,
  });
  if (!removedEvent) {
    throw new AppError(404, `Event with id:${eventId} was not found`);
  }
  return removedEvent;
};

module.exports = removeEvent;
