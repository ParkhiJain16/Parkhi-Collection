import "./Cart.css"
import { useNavigate } from "react-router-dom";
function Cart({ cart, setCart }) {
    const items = Object.entries(cart);
    const Navigate = useNavigate();
  
    if (items.length === 0) {
        return (
          <div className="cart-empty">
            <h2>Your cart is empty 🛒</h2>
          </div>
        );
      }
      
  
    const removeItem = (name) => {
      setCart(prev => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    };
    const handleCheckout = () => {
        alert("Order placed successfully 🎉");
        setCart({});       
        Navigate("/");     
      };
  
    return (
      <div className="cart-page">
        <h1>Your Cart</h1>
  
        {items.map(([name, qty]) => (
          <div key={name} className="cart-item">
            <h3>{name}</h3>
            <p>Quantity: {qty}</p>
            <button onClick={() => removeItem(name)}>Remove</button>
          </div>
        ))}
  
        <button className="clear-cart" onClick={handleCheckout}>
          Check Out
        </button>
      </div>
    );
  }
  
  export default Cart;
  