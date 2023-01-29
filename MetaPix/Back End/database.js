const mongoose = require('mongoose');

// Connect to the database
mongoose.connect('mongodb://localhost/reverse-image-search', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to the database.');
});

const imageSearchSchema = new mongoose.Schema({
  image: { type: Buffer, required: true },
  searchResults: [{ type: String, required: true }],
  exifData: { type: Object, required: true },
  searchTimestamp: { type: Date, default: Date.now }
});

const ImageSearch = mongoose.model('ImageSearch', imageSearchSchema);

module.exports = {
  ImageSearch
};
