const mongoose = require('mongoose');
const eventsPriority = require('../constants/eventsPriority');

const eventsShema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Set title'],
  },
  description: {
    type: String,
    required: [true, 'Set description'],
  },
  location: {
    type: String,
    required: [true, 'Set location'],
  },
  category: {
    type: String,
    required: [true, 'Set category'],
  },
  date: {
    type: String,
    required: [true, 'Set date'],
  },
  time: {
    type: String,
    required: [true, 'Set time'],
  },
  imageURL: {
    type: String,
  },
  priority: {
    type: String,
    enum: Object.values(eventsPriority),
    default: eventsPriority.LOW,
  },
});

const Event = mongoose.model('events', eventsShema);

module.exports = Event;
