import FoodRadioGroup from "../../FoodRadioGroup";
import ReviewBurrito from "../../ReviewBurrito";
import AddOnCheckbox from "../../AddOnCheckbox";
import { useSelector } from "react-redux";
import {
  meatList,
  riceList,
  beansList,
  addOnList,
  tortillaList,
} from "../../utils";

const FoodSelectionStep = () => {
  const {
    activeStep,
    selectedTortilla,
    selectedMeat,
    selectedRice,
    selectedBeans,
    selectedAddOns,
  } = useSelector((state) => state.burritoState);

  const determineFoodGroup = (stepIteration) => {
    switch (stepIteration) {
      case 0:
        return <FoodRadioGroup step={0} foodList={tortillaList} />;
      case 1:
        return <FoodRadioGroup step={1} foodList={meatList} />;
      case 2:
        return <FoodRadioGroup step={2} foodList={riceList} />;
      case 3:
        return <FoodRadioGroup step={3} foodList={beansList} />;
      case 4:
        return <AddOnCheckbox foodList={addOnList} />;
      default:
        break;
    }
  };

  const determineImg = (stepIteration) => {
    switch (stepIteration) {
      case 0:
        return <img alt="selected tortilla type" src={selectedTortilla?.img} />;
      case 1:
        return <img alt="selected meat type" src={selectedMeat?.img} />;
      case 2:
        return <img alt="selected rice type" src={selectedRice?.img} />;
      case 3:
        return <img alt="selected beans type" src={selectedBeans?.img} />;
      case 4:
        return (
          <div>
            {selectedAddOns.map((item, index) => (
              <img
                key={index}
                style={{ height: 200 }}
                alt="selected add on"
                src={item?.img}
              />
            ))}
          </div>
        );
      default:
        break;
    }
  };
  return (
    <div>
      {activeStep === 5 ? (
        <ReviewBurrito />
      ) : (
        <div className={activeStep === 4 ? "addOnWrapper" : "contentWrapper"}>
          {determineFoodGroup(activeStep)}
          {determineImg(activeStep)}
        </div>
      )}
    </div>
  );
};

export default FoodSelectionStep;
