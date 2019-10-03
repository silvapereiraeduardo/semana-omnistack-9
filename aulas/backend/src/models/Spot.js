const mongoose = require("mongoose");
const serverConfig = require("../config/server");

const SpotSchema = new mongoose.Schema(
  {
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

SpotSchema.virtual("thumbnail_url").get(function() {
  return `${serverConfig.base_url}/files/${this.thumbnail}`;
});

module.exports = mongoose.model("Spot", SpotSchema);
