import { Link } from "react-router-dom";
import type { Product } from "../types";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="product-card">
      <Link to={`/products/${product._id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="body">
        <Link to={`/products/${product._id}`}>
          <h3>{product.name}</h3>
        </Link>
        <div className="price">${product.price.toFixed(2)}</div>
        <button
          className="btn"
          disabled={product.stock === 0}
          onClick={() => addItem(product)}
        >
          {product.stock === 0 ? "Out of stock" : "Add to cart"}
        </button>
      </div>
    </div>
  );
}