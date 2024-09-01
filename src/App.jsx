import { useState } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/cart/Cart";
import { CartContextProvider } from "./context/CartContext";

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => setShowCart(true);
  const handleHideCart = () => setShowCart(false);

  return (
    <CartContextProvider>
      <main className="main bg-gray min-h-[100vh] pb-9">
        {showCart && <Cart onHideCart={handleHideCart} />}
        <Header onShowCart={handleShowCart} />

        <div>
          <Meals />
        </div>
      </main>
    </CartContextProvider>
  );
}

export default App;
