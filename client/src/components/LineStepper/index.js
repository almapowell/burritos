import { useDispatch, useSelector } from "react-redux";
import ReviewBurrito from "../ReviewBurrito";
import AddOnCheckbox from "../AddOnCheckbox";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FoodRadioGroup from "../FoodRadioGroup";
import {
  steps,
  meatList,
  riceList,
  beansList,
  addOnList,
  tortillaList,
} from "../utils";
import {
  addToCart,
  resetBurrito,
  resetStep,
  stepBackward,
  stepForward,
} from "../../redux/reducer";
import "./styles.css";

const LineStepper = () => {
  const dispatch = useDispatch();

  const activeStep = useSelector((state) => state.burritoState.activeStep);
  const selectedTortilla = useSelector(
    (state) => state.burritoState.selectedTortilla
  );
  const selectedMeat = useSelector((state) => state.burritoState.selectedMeat);
  const selectedRice = useSelector((state) => state.burritoState.selectedRice);
  const selectedBeans = useSelector(
    (state) => state.burritoState.selectedBeans
  );
  const selectedAddOns = useSelector(
    (state) => state.burritoState.selectedAddOns
  );

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
            {selectedAddOns.map((item) => (
              <img
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

  const isStepOptional = (step) => {
    return step === 4;
  };

  const handleNext = () => {
    dispatch(stepForward());
  };

  const handleBack = () => {
    dispatch(stepBackward());
  };

  const handleReset = () => {
    dispatch(resetBurrito());
    dispatch(resetStep());
  };

  const handleAddToCart = () => {
    const completeBurrito = {
      id: Math.random().toString(36).slice(2),
      ingredients: {
        selectedTortilla,
        selectedMeat,
        selectedRice,
        selectedBeans,
        selectedAddOns,
      },
      price: selectedAddOns.length + 6,
    };
    dispatch(addToCart(completeBurrito));
    handleNext();
  };

  return (
    <Box sx={{ width: "80%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Your burrito is complete. View in cart.
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Add Another</Button>
          </Box>
        </>
      ) : (
        <>
          {activeStep === 5 ? (
            <ReviewBurrito />
          ) : (
            <div
              className={activeStep === 4 ? "addOnWrapper" : "contentWrapper"}
            >
              {determineFoodGroup(activeStep)}
              {determineImg(activeStep)}
            </div>
          )}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              variant="contained"
              onClick={
                activeStep === steps.length - 1 ? handleAddToCart : handleNext
              }
            >
              {activeStep === steps.length - 1 ? "Add To Cart" : "Next"}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};
export default LineStepper;
