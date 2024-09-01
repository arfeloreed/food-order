import foodImg from "../assets/images/meals.jpg";
import CartButton from "./ui/CartButton";

const Header = ({ onShowCart }) => {
  return (
    <div className="relative">
      <div className="w-full bg-coral-red fixed z-10">
        <div className="max-container flex justify-between items-center px-12 py-9 text-white">
          <h1 className="text-2xl font-semibold cursor-pointer">ReedOrder</h1>
          <CartButton onShowCart={onShowCart} />
        </div>
      </div>

      <div className="h-[32rem] overflow-hidden w-full">
        <img
          src={foodImg}
          alt="table full of food"
          className="object-fit h-full w-full"
        />
      </div>
    </div>
  );
};

export default Header;
