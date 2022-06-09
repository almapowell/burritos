import { useSelector } from "react-redux";
import { steps } from "../../utils";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";

const StepProcess = () => {
  const activeStep = useSelector((state) => state.burritoState.activeStep);
  return (
    <Stepper activeStep={activeStep}>
      {steps.map((label) => {
        const stepProps = {};
        const labelProps = {};
        if (label === "Add Ons - $1.00 Each") {
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
  );
};

export default StepProcess;
