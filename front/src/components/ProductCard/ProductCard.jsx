import { Link } from "react-router-dom";
import "./ProductCard.scss";

const ProductCard = ({ title, description, image, price, id }) => {
  return (
    <article className="products-card">
      <Link to={`/product/${id}`}  >
        <img className="products-card__image" src={image} alt={title} />
      </Link>
      <h3 className="products-card__title">{title}</h3>
      <p className="products-card__description">{description}</p>
      <p>{price} €</p>
    </article>
  )
}

export default ProductCard