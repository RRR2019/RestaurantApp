const mongoose = require("mongoose");
//Define a schema
const Schema = mongoose.Schema;
const RestaurantSchema = new Schema({
  userRestaurantName: {
    type: String,
    trim: true,
    default: "Your Restaurant Name Goes Here"
  },
  userRestaurantTagline: {
    type: String,
    trim: true,
    default: "Your Tag Line Goes Here"
  },
  userRestaurantAboutText: {
    type: String,
    trim: true,
    default: "Lorem ipsum dolor sit amet sale referrentur Aliquid abhorreant cu vim, veri cetero e mel sea ne nostro communet veri eripuit Lorem ipsum dolor sit amet sale referrentur Aliquid abhorreant cu vim, veri cetero e mel sea ne nostro communet veri eripuit Lorem ipsum dolor sit amet sale referrentur Aliquid abhorreant cu vim, veri cetero e mel sea ne nostro communet veri eripuit"
  },
  userAppetizerHeader: {
    type: String,
    trim: true,
    default: "Appetizers"
  }
});

module.exports = RestaurantSchema;