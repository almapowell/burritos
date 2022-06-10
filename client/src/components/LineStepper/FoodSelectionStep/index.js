import FoodRadioGroup from "../../FoodRadioGroup";
import ReviewBurrito from "../../ReviewBurrito";
import AddOnCheckbox from "../../AddOns/AddOnCheckbox";
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
        return <FoodRadioGroup foodList={tortillaList} />;
      case 1:
        return <FoodRadioGroup foodList={meatList} />;
      case 2:
        return <FoodRadioGroup foodList={riceList} />;
      case 3:
        return <FoodRadioGroup foodList={beansList} />;
      case 4:
        return <AddOnCheckbox foodList={addOnList} />;
      default:
        break;
    }
  };

  const determineImg = (stepIteration) => {
    const standardImgSize = (type, ingredient) => (
      <img
        style={{ height: ingredient === "add-ons" ? "10vw" : "15vw" }}
        alt=""
        src={type}
      />
    );

    switch (stepIteration) {
      case 0:
        return standardImgSize(selectedTortilla?.img);
      case 1:
        return standardImgSize(selectedMeat?.img);
      case 2:
        return standardImgSize(selectedRice?.img);
      case 3:
        return standardImgSize(selectedBeans?.img);
      case 4:
        return (
          <div>
            {selectedAddOns.map((item, index) => (
              <span key={index}>{standardImgSize(item?.img, "add-ons")}</span>
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
        <div className="contentWrapper">
          <div>{determineFoodGroup(activeStep)}</div>
          <div>{determineImg(activeStep)}</div>
        </div>
      )}
    </div>
  );
};

export default FoodSelectionStep;
