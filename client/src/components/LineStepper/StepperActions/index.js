import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  addToCart,
  stepBackward,
  stepForward,
  updateBurrito,
} from "../../../redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import { steps } from "../../utils";

const StepperActions = () => {
  const dispatch = useDispatch();

  const {
    editingBurritoId,
    editingBurrito,
    activeStep,
    selectedTortilla,
    selectedMeat,
    selectedRice,
    selectedBeans,
    selectedAddOns,
  } = useSelector((state) => state.burritoState);

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

  const handleUpdateBurrito = () => {
    const editedBurrito = {
      id: editingBurritoId,
      ingredients: {
        selectedTortilla,
        selectedMeat,
        selectedRice,
        selectedBeans,
        selectedAddOns,
      },
      price: selectedAddOns.length + 6,
    };
    dispatch(updateBurrito(editedBurrito));
    handleNext();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        pt: 2,
      }}
    >
      <Button
        color="inherit"
        disabled={activeStep === 0}
        onClick={handleBack}
        sx={{ mr: 1 }}
      >
        Back
      </Button>
      <Box sx={{ flex: "1 1 auto" }} />

      {activeStep === steps.length - 1 ? (
        <Button
          variant="contained"
          onClick={editingBurrito ? handleUpdateBurrito : handleAddToCart}
        >
          {editingBurrito ? "Done" : "Add To Cart"}
        </Button>
      ) : (
        <Button variant="contained" onClick={handleNext}>
          Next
        </Button>
      )}
    </Box>
  );
};

export default StepperActions;
