function ProductContainer({imgLink,name,rating,ratingCount,priceCents}) {
    const priceDollar = (priceCents / 100).toFixed(2);
    const convertedRating = rating * 10;


  return (
    <div className="product-container">
      <div className="product-image-container">
        <img
          className="product-image"
          src={imgLink}
        />
      </div>

      <div className="product-name limit-text-to-2-lines">
        {name}
      </div>

      <div className="product-rating-container">
        <img
          className="product-rating-stars"
          src={"images/ratings/rating-"+convertedRating+".png"}
        />
        <div className="product-rating-count link-primary">{ratingCount}</div>
      </div>

      <div className="product-price">${priceDollar}</div>

      <div className="product-quantity-container">
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div className="product-spacer"></div>

      <div className="added-to-cart">
        <img src="images/icons/checkmark.png" />
        Added
      </div>

      <button className="add-to-cart-button button-primary">Add to Cart</button>
    </div>
  );
}

export default ProductContainer;
