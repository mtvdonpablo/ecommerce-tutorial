import "./HomePage.css";
import Header from "../components/Header";
import ProductContainer from "../components/ProductContainer";
import axios from "axios";
import { useEffect, useState } from "react";

function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  }, []); //empty array means it only loads once, strict mode runs useeffect twice which only occurs during development

  return (
    <>
      <title>Ecommerce Project</title>
      <Header cart={cart} />

      <div className="home-page">
        <div className="products-grid">
          {products.map((product) => (
            <ProductContainer
              key={product.id}
              imgLink={product.image}
              name={product.name}
              rating={product.rating.stars}
              ratingCount={product.rating.count}
              priceCents={product.priceCents}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
