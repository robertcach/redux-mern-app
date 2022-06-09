require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("../models/Product.model");
const defaultProducts = require("./defaultProducts.json");
require("../config/db.config");

mongoose.connection.once("open", () => {
  console.info(
    `*** Connected to the database ${mongoose.connection.db.databaseName} ***`);

  mongoose.connection.db
    .dropDatabase()
    .then(() => `${mongoose.connection.db.databaseName} successfully dropped`)
    .then(() => {
      return Product.create(defaultProducts);
    })
    .then((products) => {
        console.log(products.length, "products created")
    })
    .catch((error) => console.log("mongoose", error))
      .finally(() => {
        mongoose.connection
          .close()
          .then(() => console.log("Finish seeds.js"))
          .catch((e) => console.error(e))
          .finally(() => {
            process.exit(0);
          });
      });
});