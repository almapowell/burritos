import { useSelector } from "react-redux";
import "./styles.css";

const ReviewBurrito = () => {
  const editingBurrito = useSelector(
    (state) => state.burritoState.editingBurrito
  );
  const selectedTortilla = useSelector(
    (state) => state.burritoState.selectedTortilla
  );
  const selectedMeat = useSelector((state) => state.burritoState.selectedMeat);
  const selectedRice = useSelector((state) => state.burritoState.selectedRice);
  const selectedBeans = useSelector(
    (state) => state.burritoState.selectedBeans
  );
  const selectedAddOns = useSelector(
    (state) => state.burritoState.selectedAddOns
  );

  return (
    <div>
      <div className="section">
        <span className="ingredients">
          Base Ingredients - <small>$6.00</small>
        </span>
        <div className="image">
          <div className="imageWrapper">
            <img
              className="imageReview"
              alt="selected tortilla type"
              src={selectedTortilla.img}
            />
            <span>{selectedTortilla.label}</span>
          </div>
          <div className="imageWrapper">
            <img
              className="imageReview"
              alt="selected meat type"
              src={selectedMeat.img}
            />
            <span>{selectedMeat.label}</span>
          </div>
          <div className="imageWrapper">
            <img
              className="imageReview"
              alt="selected rice type"
              src={selectedRice.img}
            />
            <span>{selectedRice.label}</span>
          </div>
          <div className="imageWrapper">
            <img
              className="imageReview"
              alt="selected beans type"
              src={selectedBeans.img}
            />
            <span>{selectedBeans.label}</span>
          </div>
        </div>
      </div>

      <div className="section">
        {selectedAddOns.length > 0 ? (
          <>
            <span className="ingredients">
              Add On Ingredients - <small>${selectedAddOns.length}.00</small>
            </span>
            <div className="image">
              {selectedAddOns.map((item) => (
                <div key={item.value} className="imageWrapper">
                  <img
                    className="imageReview"
                    alt="selected tortilla type"
                    src={item.img}
                  />
                  <span>{item.label}</span>
                </div>
              ))}
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
