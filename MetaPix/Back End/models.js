const mongoose = require("mongoose");

const SearchResultSchema = new mongoose.Schema({
  imageURL: {
    type: String,
    required: true,
  },
  searchResults: [
    {
      provider: {
        type: String,
        required: true,
      },
      results: [
        {
          title: {
            type: String,
            required: true,
          },
          description: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true,
          },
        },
      ],
    },
  ],
  exifData: {
    type: Object,
    required: true,
  },
});

const SearchResult = mongoose.model("SearchResult", SearchResultSchema);

module.exports = SearchResult;
