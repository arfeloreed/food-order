import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import { CartContext } from "../../context/CartContext";

const MealItem = ({ id, mealName, description, price }) => {
  const cartCtx = useContext(CartContext);

  const handleAddToCart = (amount) => {
    cartCtx.addItem({
      id: id,
      name: mealName,
      amount: amount,
      price: price,
    });
  };

  return (
    <li className="flex justify-between m-4 pb-4 border-b border-b-slate-300">
      <div>
        <h3 className="mb-1 text-2xl font-semibold">{mealName}</h3>
        <div className="italic">{description}</div>
        <div className="font-bold mt-1 text-xl text-[#ad5502]">${price}</div>
      </div>

      <div>
        <MealItemForm id={id} onAddToCart={handleAddToCart} />
      </div>
    </li>
  );
};

export default MealItem;
