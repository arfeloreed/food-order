import { useContext, useState, useEffect } from "react";
import CartIcon from "../cart/CartIcon";
import { CartContext } from "../../context/CartContext";

const CartButton = ({ onShowCart }) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const [isHighlight, setIsHighlight] = useState(false);

  const cartItemCount = items.reduce((accumulator, item) => {
    return accumulator + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) return;

    setIsHighlight(true);

    const timer = setTimeout(() => {
      setIsHighlight(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [items]);

  return (
    <button
      className={`button ${isHighlight ? "bump" : ""}`}
      onClick={onShowCart}
    >
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{cartItemCount}</span>
    </button>
  );
};

export default CartButton;
