const Event = require('../../models/eventModel');
const { generateImage } = require('../../utils');

const addEvent = async newEvent => {
  const newImage = await generateImage(newEvent.category);
  if (newImage) {
    newEvent.imageURL = newImage;
  }
  const event = new Event({ ...newEvent });
  await event.save();
  return event;
};

module.exports = addEvent;
