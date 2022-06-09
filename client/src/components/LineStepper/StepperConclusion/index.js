import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { resetBurrito, resetStep } from "../../../redux/reducer";

const StepperConclusion = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetBurrito());
    dispatch(resetStep());
  };

  return (
    <>
      <Typography
        sx={{
          fontSize: 20,
          mt: 2,
          mb: 1,
          p: 3,
          display: "flex",
          justifyContent: "center",
        }}
      >
        Your burrito is complete. View in cart.
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button variant="outlined" onClick={handleReset}>
          Add Another
        </Button>
      </Box>
    </>
  );
};

export default StepperConclusion;
