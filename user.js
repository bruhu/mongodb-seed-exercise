const { Schema, model } = require("mongoose");
​
const userSchema = new Schema(
  {
    first_name: String,
    last_name: String,
    email: { type: String, required: true, unique: true },
    age: Number,
    username: String,
    short_bio: String,
    address: {
      street: String,
      street_number: String,
      zip: String,
      state: String,
      city: String,
      country: String
    },
    phone_number: String
  },
  { strict: "throw", timestamps: true }
);
​
const UserModel = model("User", userSchema);
​
module.exports = UserModel;