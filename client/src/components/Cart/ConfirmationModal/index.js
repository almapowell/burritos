import { removeFromCart } from "../../../redux/reducer";
import { useDispatch } from "react-redux";
import { Button, Modal, Typography, Box } from "@mui/material";

const ConfirmationModal = ({ item, open, handleCloseModal }) => {
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

  const handleDelete = () => {
    dispatch(removeFromCart(item));
    handleCloseModal();
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure?
          </Typography>
          <div className="confirmationButtons">
            <Button onClick={handleDelete} variant="outlined" color="error">
              Delete
            </Button>
            <Button onClick={handleCloseModal}>Cancel</Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ConfirmationModal;
