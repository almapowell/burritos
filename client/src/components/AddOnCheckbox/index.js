import { useDispatch, useSelector } from "react-redux";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { addOnList } from "../utils";
import { addAddOn, removeAddOn } from "../../redux/reducer";

const AddOnCheckbox = ({ foodList }) => {
  const dispatch = useDispatch();
  const selectedAddOns = useSelector(
    (state) => state.burritoState.selectedAddOns
  );

  const handleSelectedCheckbox = (index, adding) => {
    if (adding) {
      dispatch(addAddOn(addOnList[index]));
    } else {
      dispatch(removeAddOn(addOnList[index]));
    }
  };

  return (
    <FormControl>
      {foodList?.map((item, index) => (
        <FormControlLabel
          key={index}
          control={<Checkbox checked={selectedAddOns.includes(item)} />}
          label={item.label}
          onChange={(e) => handleSelectedCheckbox(index, e.target.checked)}
        />
      ))}
    </FormControl>
  );
};

export default AddOnCheckbox;
