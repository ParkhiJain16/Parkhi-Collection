import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar({cart = {}}) {
  const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    navigate(`/product/${search.toLowerCase()}`);
    setSearch("");
  };

  return (
    <nav className="navbar">
  <h2 className="logo">Parkhi Collection</h2>

  <div className="nav-right">
    <ul className="nav-links">
      <li><NavLink to="/" end>Home</NavLink></li>
      <li><NavLink to="/about">About Us</NavLink></li>
      <li><NavLink to="/contact">Contact Us</NavLink></li>
    </ul>

    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        placeholder="Search categories..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
    <NavLink to="/cart" className="cart-link">
          🛒 Cart <span className="cart-count">{cartCount}</span>
    </NavLink>
  </div>
</nav>

  );
}

export default Navbar;

