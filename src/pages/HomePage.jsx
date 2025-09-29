
import "./HomePage.css";
import Header from "../components/Header";
import { products } from "../starting-code/data/products";
import ProductContainer from "../components/ProductContainer";

function HomePage() {
  return (
    <>
      <title>Ecommerce Project</title>
      <Header />

      <div className="home-page">
        <div className="products-grid">
          {products.map((product)=>(
            
              <ProductContainer 
              key = {product.id}
              imgLink={product.image}
              name={product.name}
              rating={product.rating.stars}
              ratingCount= {product.rating.count}
              priceCents={product.priceCents}
              />
            
          ))}



        </div>
      </div>
    </>
  );
}

export default HomePage;
