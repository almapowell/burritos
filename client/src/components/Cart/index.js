import "./styles.css";
import { Button, Modal, Typography, Box } from "@mui/material";
import { useState } from "react";
import { removeFromCart } from "../../redux/reducer";
import { useDispatch } from "react-redux";

const Cart = ({ cart }) => {
  const [itemToDelete, setItemToDelete] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price, 0);
  };

  const openModal = (item) => {
    setItemToDelete(item);
    handleOpen();
  };

  const removeIcon = (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path d="M9 3h6v-1.75c0-.066-.026-.13-.073-.177-.047-.047-.111-.073-.177-.073h-5.5c-.066 0-.13.026-.177.073-.047.047-.073.111-.073.177v1.75zm11 1h-16v18c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-18zm-10 3.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v12c0 .276.224.5.5.5s.5-.224.5-.5v-12zm5 0c0-.276-.224-.5-.5-.5s-.5.224-.5.5v12c0 .276.224.5.5.5s.5-.224.5-.5v-12zm8-4.5v1h-2v18c0 1.105-.895 2-2 2h-14c-1.105 0-2-.895-2-2v-18h-2v-1h7v-2c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v2h7z" />
    </svg>
  );

  return (
    <div className="cartContainer">
      <span className="title">Cart ({cart.length})</span>
      <div className="itemsWrapper">
        {cart.map((item) => (
          <div className="cartItem" key={item.id}>
            <img
              alt="burrito"
              height={150}
              src="https://www.caferio.com/images/our-food/burrito-enchilada-style.png"
            />
            <span className="itemPrice">
              <strong>{item.ingredients.selectedMeat.label} Burrito</strong> - $
              {item.price}.00
              <span onClick={() => openModal(item)} className="removeIcon">
                {removeIcon}
              </span>
            </span>
          </div>
        ))}
      </div>
      <div className="checkout">
        <span>Total: ${getTotalPrice()}.00</span>
        <Button variant="contained">Checkout</Button>
      </div>
      <ConfirmationModal
        item={itemToDelete}
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
};

const ConfirmationModal = ({ item, open, handleClose }) => {
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
    handleClose();
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
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
            <Button onClick={handleClose}>Cancel</Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Cart;
