import { useSelector } from "react-redux";
import "./styles.css";

const ReviewBurrito = () => {
  const {
    editingBurrito,
    selectedTortilla,
    selectedMeat,
    selectedRice,
    selectedBeans,
    selectedAddOns,
  } = useSelector((state) => state.burritoState);

  const baseIngredients = [
    selectedTortilla,
    selectedMeat,
    selectedRice,
    selectedBeans,
  ];

  const renderItem = (item, type) => {
    return (
      <div key={item.value} className="itemWrapper">
        <img
          style={{ width: type === "add-ons" ? "10vw" : "15vw" }}
          alt=""
          src={item.img}
        />
        <span>{item.label}</span>
      </div>
    );
  };

  return (
    <div>
      <div className="section">
        <span className="titles">
          Base Ingredients - <small>$6.00</small>
        </span>
        <div className="ingredientWrapper">
          {baseIngredients.map((item) => renderItem(item))}
        </div>
      </div>

      <div className="section">
        {selectedAddOns.length > 0 ? (
          <>
            <span className="titles">
              Add On Ingredients - <small>${selectedAddOns.length}.00</small>
            </span>
            <div className="ingredientWrapper">
              {selectedAddOns.map((item) => renderItem(item, "add-ons"))}
            </div>
          </>
        ) : (
          <span>No Add Ons Selected</span>
        )}
      </div>

      <h2 className="total">
        {!editingBurrito && `Total: $${selectedAddOns.length + 6}.00`}
      </h2>
    </div>
  );
};

export default ReviewBurrito;
