const fetch = require('node-fetch');
const generateImage = async category => {
  try {
    const response = await fetch(
      `https://source.unsplash.com/random/332x332/?${category}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch the image');
    }
    return response.url;
  } catch (error) {
    return null;
  }
};

module.exports = generateImage;
