import http from "./BaseService"

export const listProducts = () => http.get("/");
export const createProduct = (data) => http.post("/new-product", data);
export const detailProduct = (id) => http.get(`/product/${id}`);
export const deleteProduct = (id) => http.delete(`/product/${id}`);