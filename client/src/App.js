import FoodRadioGroup from "./components/FoodRadioGroup";
import LineStepper from "./components/LineStepper";
import Cart from "./components/Cart";
import { useSelector } from "react-redux";

function App() {
  const cart = useSelector((state) => state.burritoState.cart);
  console.log(cart);

  return (
    <div className="App">
      <span className="title">Build Your Own Burrito</span>
      <LineStepper />
      <FoodRadioGroup />
      {cart?.length > 0 && <Cart cart={cart} />}
    </div>
  );
}

export default App;
