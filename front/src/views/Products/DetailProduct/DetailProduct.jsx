import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { deleteProduct, detailProduct } from "../../../services/ProductsService";
import {  productDelete, productDetail } from "../../../redux/actions/productsActions";
import { useDispatch, useSelector } from "react-redux";
import "./DetailProduct.scss";

const DetailProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    detailProduct(id)
      .then(product => dispatch(productDetail(product)))
      .catch(error => console.log(error))
  },[dispatch, id])

  const product = useSelector(state => state.allProducts.oneProduct);

  const handleDelete = (id) => {
    deleteProduct(id)
      .then(() => dispatch(productDelete(product._id)))
      .then(() => navigate("/"))
      .catch(error => console.log(error))
  }

  return (
    <div className="wrapper details">
      <h2 className="details__info">Product Detail</h2>
      {product && (
        <>
          <h1 className="details__title">{product.title}</h1>
          <p className="details__description">{product.description}</p>
          <img className="details__image" src={product.image} alt={product.title} />
          <br />
          <button className="details__btn" onClick={() => handleDelete(product._id)}>Delete product</button>
        </>
      )}
    </div>
  )
}

export default DetailProduct;