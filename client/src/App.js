import FoodRadioGroup from "./components/FoodRadioGroup";
import LineStepper from "./components/LineStepper";
import MobileLineStepper from "./components/LineStepper/MobileLineStepper";
import Cart from "./components/Cart";
import { useSelector } from "react-redux";
import { onMobileDevice } from "./components/utils";

function App() {
  const cart = useSelector((state) => state.burritoState.cart);

  return (
    <div className="App">
      <Cart cart={cart} />
      <span className="title">Build Your Own Burrito</span>
      {onMobileDevice ? <MobileLineStepper /> : <LineStepper />}
      <FoodRadioGroup />
    </div>
  );
}

export default App;
