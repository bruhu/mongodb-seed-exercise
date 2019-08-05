const mongoose = require("mongoose");
const faker = require("faker");
​
const UserModel = require("./model/user");
​
mongoose.connect("mongodb://localhost:27017/seed-test", {
  useNewUrlParser: true,
  useCreateIndex: true
});
​
const db = mongoose.connection;
​
const createFakeUsers = (amount = 5) =>
  new Array(amount).fill(0).map(() => ({
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    age: Math.floor(Math.random() * 70 + 18),
    username: faker.internet.userName(),
    short_bio: faker.lorem.text(),
    address: {
      street: faker.address.streetName(),
      street_number: Math.floor(Math.random() * 7000 + 0),
      zip: faker.address.zipCode(),
      city: faker.address.city(),
      country: faker.address.country()
    },
    phone_number: faker.phone.phoneNumber()
  }));
​
const main = async () => {
  await db.dropCollection("users");
  const fakeUser = createFakeUsers(1000);
  const fakeUserModels = fakeUser.map(user => new UserModel(user).save());
​
  await Promise.all(fakeUserModels);
  console.log("Done");
  process.exit(0);
};
​
main();