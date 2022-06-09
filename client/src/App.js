import FoodRadioGroup from "./components/FoodRadioGroup";
import LineStepper from "./components/LineStepper";
import Cart from "./components/Cart";
import { useSelector } from "react-redux";

function App() {
  const cart = useSelector((state) => state.burritoState.cart);

  return (
    <div className="App">
      <Cart cart={cart} />
      <span className="title">Build Your Own Burrito</span>
      <LineStepper />
      <FoodRadioGroup />
    </div>
  );
}

export default App;
