import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { steps } from "../../utils";
import { useSelector, useDispatch } from "react-redux";
import { stepBackward, stepForward, addToCart } from "../../../redux/reducer";
import FoodSelectionStep from "../FoodSelectionStep";
import StepperConclusion from "../StepperConclusion";

const MobileLineStepper = () => {
  const dispatch = useDispatch();

  const theme = useTheme();

  const {
    editingBurrito,
    activeStep,
    selectedTortilla,
    selectedMeat,
    selectedRice,
    selectedBeans,
    selectedAddOns,
  } = useSelector((state) => state.burritoState);

  const maxSteps = steps.length;

  const handleNext = () => {
    dispatch(stepForward());
  };

  const handleBack = () => {
    dispatch(stepBackward());
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

  console.log(theme);

  return (
    <Box sx={{ width: "90%", flexGrow: 1 }}>
      {activeStep === steps.length ? (
        <StepperConclusion />
      ) : (
        <>
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              {steps[activeStep]}
            </Typography>
          </Paper>
          <Box>
            <FoodSelectionStep />
          </Box>
          <MobileStepper
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              activeStep === steps.length - 1 ? (
                <Button onClick={editingBurrito ? handleNext : handleAddToCart}>
                  {editingBurrito ? "Done" : "Add To Cart"}
                  <KeyboardArrowRight />
                </Button>
              ) : (
                <Button size="small" onClick={handleNext}>
                  Next
                  <KeyboardArrowRight />
                </Button>
              )
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                <KeyboardArrowLeft />
                Back
              </Button>
            }
          />
        </>
      )}
    </Box>
  );
};
export default MobileLineStepper;
