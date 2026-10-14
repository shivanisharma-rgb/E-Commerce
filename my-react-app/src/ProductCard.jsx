function ProductCard({ name, price, category, image, onAddToCart }) {
  return (
    <article className="product-card">
      <img src={image} alt={name} loading="lazy" />
      <div className="product-details">
        <p className="product-category">{category}</p>
        <h3>{name}</h3>
        <p className="product-price">₹{price.toLocaleString("en-IN")}</p>
        <button type="button" onClick={onAddToCart}>
          Add to cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;