const express = require('express');
const {
  createEventController,
  getAllEventsController,
  removeEventController,
  updateEventController,
} = require('../../controllers/events');
const { validEvents } = require('../../middleware/validateEvents');

const router = express.Router();

router.get('/', getAllEventsController);

router.post('/', validEvents, createEventController);

router.patch('/:eventId', validEvents, updateEventController);

router.delete('/:eventId', removeEventController);

module.exports = router;
