const Event = require('../../models/eventModel');
const { AppError } = require('../../utils');

const getEvents = async () => {
  const events = await Event.find({});
  if (!events) {
    throw new AppError(400, 'Error. Failed to get tasks.');
  }
  return events;
};
module.exports = getEvents;
