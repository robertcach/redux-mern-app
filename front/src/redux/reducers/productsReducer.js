import { GET_PRODUCTS, NEW_PRODUCT, DETAIL_PRODUCT, DELETE_PRODUCT } from "../types/index";

const initialState = {
  products: [],
  oneProduct: null
}

export const productsReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case GET_PRODUCTS:
      return {...state, products: payload}
    case NEW_PRODUCT:
      return {...state, products: [...state.products, payload]
      }
    case DETAIL_PRODUCT:
      return {...state, oneProduct: payload}
    case DELETE_PRODUCT:
      return {...state, products: state.products.filter(product => product._id !== payload)
      }
    default:
      return state;
  }
}