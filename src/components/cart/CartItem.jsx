const CartItem = ({ name, price, amount, onRemove, onAdd }) => {
  return (
    <li className="cart-item">
      <div>
        <h2>{name}</h2>
        <div className="summary">
          <span className="price">{price}</span>
          <span className="amount">x {amount}</span>
        </div>
      </div>
      <div className="actions">
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
