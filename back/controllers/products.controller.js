const Product = require("../models/Product.model");

module.exports.create = (req, res, next) => {
  const product = { title, description } = req.body

  if (req.file) {
    product.image = req.file.path
  }

  Product.create(product)
    .then(newProduct => res.status(200).json(newProduct))
    .catch(next)
}

module.exports.list = (req, res, next) => {
  Product.find()
    .then(products => res.status(200).json(products))
    .catch(next)
}

module.exports.detail = (req, res, next) => {
  Product.findById(req.params.id)
    .then(product => res.status(200).json(product))
    .catch(next)
}

module.exports.delete = (req, res, next) => {
  Product.findByIdAndRemove(req.params.id)
    .then(product => res.status(202).json(product))
    .catch(next)
}