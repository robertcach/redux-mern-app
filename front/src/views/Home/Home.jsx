import { useEffect} from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from '../../redux/actions/productsActions';
import { listProducts } from "../../services/ProductsService"
import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    listProducts()
      .then(products => dispatch(getProducts(products)))
      .catch(error => console.log(error))
  },[dispatch])

  const allProducts = useSelector(state => state.allProducts.products);

  return (
    <main>
      <section className="header wrapper">
        <div className="header__left">
          <h1 className="header__title">New trendy Fashion</h1>
          <a className="header__btn" href="#products">Go to shop</a>
        </div>

        <div className="header__center">
          <img src="https://picsum.photos/id/157/600/750" className="header__img" alt="header" />
        </div>

        <div className="header__right">
          <p className="header__subtitle">I must explains to you how all this idea of denouncing pleasure</p>
        </div>  
      </section>

      <section id="products" className="products wrapper">
        <h2 className="products__title">Products</h2>
        <div className="products__cards">
          {allProducts && allProducts.map(product => {
            return (
              <ProductCard
                key={product._id}
                title={product.title}
                description={product.description}
                image={product.image}
                price={product.price}
                id={product._id}
              /> 
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default Home;