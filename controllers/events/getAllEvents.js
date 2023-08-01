const getEvents = require('../../services/eventsServices/getEvents');
const { catchAsync } = require('../../utils');

const getAllEventsController = catchAsync(async (req, res) => {
  const events = await getEvents();

  res.status(200).json({
    message: 'Success',
    events,
  });
});

module.exports = getAllEventsController;
