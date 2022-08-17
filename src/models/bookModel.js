const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    bookName: {
      type: String,
      require: true,
    },
    authorName: String,
    tags: [String],

    isPublished: Boolean,
    prices: {
      indianPrice: String,
      europePrice: String,
    },
    sales: { type: Number, default: 10 },
    year: {
      type: Number,
      default: 2022,
    },
    TotalPage: Number,
    stockAvailable: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema); //books

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
