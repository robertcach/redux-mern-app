import { GET_PRODUCTS, NEW_PRODUCT, DETAIL_PRODUCT, DELETE_PRODUCT } from "../types/index"

export const getProducts = (products) => {
  return {type: GET_PRODUCTS, payload: products}
}

export const addProduct = (product) => {
  return {type: NEW_PRODUCT, payload: product}
}

export const productDetail = (product) => {
  return {type: DETAIL_PRODUCT, payload: product}
}

export const productDelete = (id) => {
  return {type: DELETE_PRODUCT, payload: id}
}
