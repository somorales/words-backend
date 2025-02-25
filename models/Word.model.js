const { Schema, model } = require("mongoose");

const wordSchema = new Schema({
  word: {
    type: String,
    required: [true, "word is required."],
  },

  meaning: {
    type: String,
    required: [true, "Meaning is required."],
  },

  translation: {
    type: String,
    required: [true, "Translation is required."],
  },

  sentences: {
    type: Array,
    required: [true, "Sentences is required."],
  },

  language: {
    type: String,
    required: [true, "Lenguage is required."],
  },

  /* user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },*/
});

const Word = model("Word", wordSchema);

module.exports = Word;
