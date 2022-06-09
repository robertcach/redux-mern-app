const mongoose = require("mongoose");

const DB_NAME = "flat-101-frontend-developer-api";
const URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017"
const DB_URI = `${URI}`;

mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.info(`Successfully connected to the database ${DB_URI}`))
  .catch((error) => {
    console.log(`An error ocurred trying to connect to de database ${DB_URI}`, error);
    process.exit(0);
  })

  process.on("SIGINT", function() {
    mongoose.connection.close(function() {
      console.log('Mongoose disconnected on app termination');
      process.exit(0);
    });
  });