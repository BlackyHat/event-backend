const Event = require('../../models/eventModel');
const { AppError, generateImage } = require('../../utils');

const updateEvent = async (eventId, updatedEvent) => {
  const newImage = await generateImage(updatedEvent.category);
  if (newImage) {
    updatedEvent.imageURL = newImage;
  }

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
