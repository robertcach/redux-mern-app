import Home from "./views/Home/Home";
import NewProduct from "./views/Products/NewProduct/NewProduct";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import './App.scss';
import DetailProduct from "./views/Products/DetailProduct/DetailProduct";

function App() {
  return (
      <div className="app">
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-product" element={<NewProduct />} />
          <Route path="/product/:id" element={<DetailProduct />} />
        </Routes>
      </div>
  );
}

export default App;
