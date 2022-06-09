import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import FoodSelectionStep from "./FoodSelectionStep";
import StepperConclusion from "./StepperConclusion";
import StepperActions from "./StepperActions";
import StepProcess from "./StepProcess";
import { steps } from "../utils";
import "./styles.css";

const LineStepper = () => {
  const activeStep = useSelector((state) => state.burritoState.activeStep);

  return (
    <Box sx={{ width: "80%" }}>
      <StepProcess />
      {activeStep === steps.length ? (
        <StepperConclusion />
      ) : (
        <>
          <FoodSelectionStep />
          <StepperActions />
        </>
      )}
    </Box>
  );
};
export default LineStepper;
