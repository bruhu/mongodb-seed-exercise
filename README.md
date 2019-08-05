# MongoDB Seed

1. Let's build a seed script
- We need lots of data, we can use faker.js to create big amounts of fake data
- Make yourself familiar with faker.js https://www.npmjs.com/package/faker
- Use mongoose to connect to your database https://mongoosejs.com/The docs can be challenging, take your time!
- Create a schema for users:
  - First Name
  - Last Name
  - Email
  - Age
  - Username
  - Short bio
  - Address:
    - Street
    - Street number
    - Zip
    - City
   - Country
   - Phone number
   

2. Create a small Express app that serves users by ID - `localhost:3000/user/<user_id>` 



### Extra

Build a search endpoint where we can find users by criteria, for example: `localhost:3000/search/user/?criteria=age&value=60` 
