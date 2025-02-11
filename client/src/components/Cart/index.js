import "./styles.css";
import { Button, Drawer, Badge } from "@mui/material";
import { useState } from "react";
import CartItem from "./CartItem";
import CheckoutModal from "./CheckoutModal";
import ConfirmationModal from "./ConfirmationModal";

const shoppingCart = (
  <svg
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
  >
    <path d="M13.5 21c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m-6 2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m16.5-16h-2.964l-3.642 15h-13.321l-4.073-13.003h19.522l.728-2.997h3.75v1zm-22.581 2.997l3.393 11.003h11.794l2.674-11.003h-17.861z" />
  </svg>
);

const Cart = ({ cart }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState({});
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [checkoutModal, setCheckoutModal] = useState(false);

  const getTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price, 0);
  };

  return (
    <>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            setItemToDelete={setItemToDelete}
            setOpen={setConfirmationModal}
            closeShoppingCart={() => setCartOpen(false)}
          />
        ))}
        <div className="checkout">
          <span>Total: ${getTotalPrice()}.00</span>
          <Button
            disabled={cart.length === 0}
            onClick={() => setCheckoutModal(true)}
            variant="contained"
          >
            Checkout
          </Button>
        </div>
        <ConfirmationModal
          item={itemToDelete}
          open={confirmationModal}
          handleCloseModal={() => setConfirmationModal(false)}
        />
        <CheckoutModal
          open={checkoutModal}
          handleCloseModal={() => setCheckoutModal(false)}
          closeCart={() => setCartOpen(false)}
        />
      </Drawer>
      <div className="shoppingCartButton">
        <Button onClick={() => setCartOpen(true)}>
          <Badge badgeContent={cart.length} color="error">
            {shoppingCart}
          </Badge>
        </Button>
      </div>
    </>
  );
};

export default Cart;
