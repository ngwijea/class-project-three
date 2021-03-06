const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const restaurantSchema = new Schema({
  user: {type: String, required: true},
  restaurant: { type: String, required: true },
  restaurantId: {type: String, required: true},
  cuisines: { type: [], required: true },
  rating: {type: Number},
  location: { type: String },
  phone: String,
  image : String,
  link: String
});
const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;