//sample code from mongoosejs.com
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true });
//import schema

//be careful with your schemas and what data type you choose, to not lock users out
const userSchema = new Schema(
  {
    first_name: String,
    last_name: String,
    email: {
      type: String,
      required: true,
      unique: true
    },
    age: Number,
    username: String,
    short_bio: String,
    address: {
      street: String,
      //these will be strings in case they start with a 0 or may contain letters or characters like -
      street_number: String,
      zip: String,
      city: String,
      country: String
    },
    phone_number: String
  },
  { strict: "throw", timestamps: true }
);
