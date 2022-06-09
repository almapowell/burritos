import { useDispatch, useSelector } from "react-redux";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { defaultFoodItem } from "../utils";
import "./styles.css";
import {
  updateBeans,
  updateMeat,
  updateRice,
  updateTortilla,
} from "../../redux/reducer";

const FoodRadioGroup = ({ foodList, step }) => {
  const dispatch = useDispatch();
  const selectedTortilla = useSelector(
    (state) => state.burritoState.selectedTortilla
  );
  const selectedMeat = useSelector((state) => state.burritoState.selectedMeat);
  const selectedRice = useSelector((state) => state.burritoState.selectedRice);
  const selectedBeans = useSelector(
    (state) => state.burritoState.selectedBeans
  );

  const handleChange = (e) => {
    const item = e.target.value;
    const selectedItem = foodList
      ? foodList.filter((i) => i.value === item)[0]
      : defaultFoodItem;

    switch (step) {
      case 0:
        return dispatch(updateTortilla(selectedItem));
      case 1:
        return dispatch(updateMeat(selectedItem));
      case 2:
        return dispatch(updateRice(selectedItem));
      case 3:
        return dispatch(updateBeans(selectedItem));
      default:
        break;
    }
  };

  const getSelectedFoodItem = () => {
    switch (step) {
      case 0:
        return selectedTortilla;
      case 1:
        return selectedMeat;
      case 2:
        return selectedRice;
      case 3:
        return selectedBeans;
      default:
        break;
    }
  };

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        value={getSelectedFoodItem()?.value}
        onChange={handleChange}
      >
        {foodList?.map((item, index) => (
          <FormControlLabel
            key={index}
            value={item.value}
            control={<Radio />}
            label={item.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default FoodRadioGroup;
