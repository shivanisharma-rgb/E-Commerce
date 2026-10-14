import { useCallback, useEffect, useMemo, useState } from "react";
import Profile from "./Profile";
import ProductCard from "./ProductCard";
import "./App.css";

const products = [
  {
    id: 1,
    name: "YSL Heels",
    price: 30000,
    category: "Fashion",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDRZvycxto4jxfUs-MmTdQDxrevuWTYKSJZ_Ns6k7tP1U9804Io38ELUaS&s=10",
  },
  {
    id: 2,
    name: "Bag",
    price: 30000,
    category: "Fashion",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy9-2XumDeWo5ACvuxDRf4ILYUnY7SKpuGoE7jjomXg45CcsjwtNgbwZGh&s=10",
  },
  {
    id: 3,
    name: "Gown Dress",
    price: 150000,
    category: "Fashion",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPPbqwJ87hRNoafhFZiBPsuRT42-0CSr6KfoCBhSukra21HK4yTvMPyM&s=10",
  },
  {
    id: 4,
    name: "Baggy Jeans",
    price: 1500,
    category: "Fashion",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgRu5aaxrsS8aMS4JXgE0rY2UoMl4sofm3QJMl_gqcCw&s=10",
  },
  {
    id: 5,
    name: "Suits",
    price: 1000,
    category: "Fashion",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSayzADG8n8bIIC26EtqcGOQUzZ9nrm-rUYxNy0Dg0ezkpY-Ylsju3JiTo&s=10",
  },
  {
    id: 6,
    name: "Top",
    price: 1300,
    category: "Fashion",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2g3q7ded1WEcqGDZAd56vPC8BnzAGDORUp1OyMChroQ&s=10",
  },
  {
    id: 7,
    name: "Kurti",
    price: 500,
    category: "Fashion",
    image:
      "https://assets.myntassets.com/w_200,q_50,,dpr_3,fl_progressive,f_webp/assets/images/2025/DECEMBER/12/CTgw65zr_a2d8ec1b6454460e825e2f63410376fb.jpg",
  },
  {
    id: 8,
    name: "Watch",
    price: 4000,
    category: "Fashion",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXC8O7e6EqtutLccFX-UXLCAN3p8jd9Fr3_1KGkT7bOCnpewhIwuy2WhhQ&s=10",
  },
  {
    id: 9,
    name: "Shoes",
    price: 6700,
    category: "Footwear",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRWX_kyLX_dIbekX40p9h-pR_RprLTJ7TVS-p1Dy2Zqg&s",
  },
  {
    id: 10,
    name: "Face Mask",
    price: 300,
    category: "Skin Care",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHmxFIg3XzO4M_cZiUcap2J5ub2nkiKDAUWiKTgWp5Jw&s",
  },
  {
    id: 11,
    name: "Face Wash",
    price: 7000,
    category: "Skin Care",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPGz9acC7w6HUTrFF3pY2U0fU709MW90cO_vOD4xPanh3f8mWu6lwaQjo&s=10",
  },
  {
    id: 12,
    name: "Moisturizer",
    price: 674,
    category: "Skin Care",
    image: "https://www.distacart.com/cdn/shop/files/iT1jUYYiyl_600x.png?v=1736944876",
  },
];

function App() {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState({});

  const categories = useMemo(
    () => ["All", ...new Set(products.map((product) => product.category))],
    [],
  );

  const visibleProducts = useMemo(() => {
    const search = searchText.trim().toLowerCase();

    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search);
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchText, selectedCategory]);

  const addToCart = useCallback((productId) => {
    setCart((currentCart) => ({
      ...currentCart,
      [productId]: (currentCart[productId] ?? 0) + 1,
    }));
  }, []);

  const cartCount = useMemo(
    () => Object.values(cart).reduce((total, quantity) => total + quantity, 0),
    [cart],
  );

  useEffect(() => {
    document.title = cartCount > 0 ? `Style Store (${cartCount})` : "Style Store";
  }, [cartCount]);

  return (
    <main className="product-page">
      <header className="page-header">
        <div>
          <p className="eyebrow">YOUR EVERYDAY STYLE</p>
          <h1>Style Store</h1>
        </div>
        <p className="cart-count" aria-live="polite">
          Cart: <strong>{cartCount}</strong>
        </p>
      </header>

      <Profile />

      <section className="catalog" aria-labelledby="catalog-title">
        <div className="catalog-heading">
          <div>
            <p className="eyebrow">FIND YOUR NEXT FAVORITE</p>
            <h2 id="catalog-title">Products</h2>
          </div>
          <p>{visibleProducts.length} items</p>
        </div>

        <div className="catalog-controls">
          <label className="search-control">
            <span>Search products</span>
            <input
              type="search"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              placeholder="Try “shoes”"
            />
          </label>

          <label className="category-control">
            <span>Category</span>
            <select
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
        </div>

        {visibleProducts.length > 0 ? (
          <div className="products">
            {visibleProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={() => addToCart(product.id)}
              />
            ))}
          </div>
        ) : (
          <p className="empty-state" role="status">
            No products found. Try another name or category.
          </p>
        )}
      </section>
    </main>
  );
}

export default App;
