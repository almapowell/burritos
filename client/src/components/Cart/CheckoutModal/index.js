import { emptyCart, resetBurrito } from "../../../redux/reducer";
import { useDispatch } from "react-redux";
import { Modal, Typography, Box } from "@mui/material";

const CheckoutModal = ({ open, handleCloseModal, closeCart }) => {
  const dispatch = useDispatch();

  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const onClose = () => {
    dispatch(resetBurrito());
    dispatch(emptyCart());
    handleCloseModal();
    closeCart();
  };

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Thank you for shopping with us! Come again!
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default CheckoutModal;
