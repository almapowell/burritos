import { editBurrito, resetStep } from "../../../redux/reducer";
import { useDispatch } from "react-redux";

const CartItem = ({ item, setItemToDelete, setOpen, closeShoppingCart }) => {
  const dispatch = useDispatch();
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

  const editIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M18.308 0l-16.87 16.873-1.436 7.127 7.125-1.437 16.872-16.875-5.691-5.688zm-15.751 21.444l.723-3.585 12.239-12.241 2.861 2.862-12.239 12.241-3.584.723zm17.237-14.378l-2.861-2.862 1.377-1.377 2.861 2.861-1.377 1.378z" />
    </svg>
  );

  const openModal = (item) => {
    setItemToDelete(item);
    setOpen(true);
  };

  const handleEdit = (item) => {
    dispatch(resetStep());
    dispatch(editBurrito(item));
    closeShoppingCart();
  };

  return (
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
        <span onClick={() => handleEdit(item)} className="editIcon">
          {editIcon}
        </span>
      </span>
    </div>
  );
};

export default CartItem;
