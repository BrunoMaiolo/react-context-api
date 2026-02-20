import { useEffect, useState, useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

function Products() {
  const [products, setProducts] = useState([]);
  const { budgetMode } = useContext(BudgetContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  
  const filteredProducts = budgetMode
    ? products.filter(p => p.price <= 30)
    : products;

  return (
    <div>
      <h1>Products</h1>

      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            {product.title} — €{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;