import guacamole from "./AddOns/AddOnPhotos/guacamole.png";
import cheese from "./AddOns/AddOnPhotos/cheese.png";
import sourCream from "./AddOns/AddOnPhotos/sour-cream.png";
import tomatos from "./AddOns/AddOnPhotos/tomatos.png";

export const defaultFoodItem = {
  label: "",
  value: "",
  img: "",
};

export const onMobileDevice = window.innerWidth < 1000;

export const steps = [
  "Select Tortilla",
  "Select Meat",
  "Select Rice",
  "Select Beans",
  "Add Ons - $1.00 Each",
  "Review",
];

export const tortillaList = [
  {
    label: "Wheat",
    value: "wheat",
    img: "https://cdn.caferio.com/200050.jpg",
  },
  {
    label: "Flour",
    value: "flour",
    img: "https://cdn.caferio.com/200045.jpg",
  },
];

export const meatList = [
  {
    label: "Beef",
    value: "beef",
    img: "https://cdn.caferio.com/50220.jpg",
  },
  {
    label: "Chicken",
    value: "chicken",
    img: "https://cdn.caferio.com/50210.jpg",
  },
  {
    label: "Steak",
    value: "steak",
    img: "https://cdn.caferio.com/50250.jpg",
  },
  {
    label: "Pork",
    value: "Pork",
    img: "https://cdn.caferio.com/50230.jpg",
  },
  {
    label: "Veggie",
    value: "veggie",
    img: "https://cdn.caferio.com/50270.jpg",
  },
];

export const riceList = [
  {
    label: "White Rice",
    value: "white",
    img: "https://cdn.caferio.com/200072.jpg",
  },
  {
    label: "No Rice",
    value: "no-rice",
    img: "https://cdn.caferio.com/200055.jpg",
  },
];

export const beansList = [
  {
    label: "Black Beans",
    value: "black",
    img: "https://cdn.caferio.com/251001.jpg",
  },
  {
    label: "Pinto Beans",
    value: "pinto",
    img: "https://cdn.caferio.com/251006.jpg",
  },
  {
    label: "No Beans",
    value: "no-beans",
    img: "https://cdn.caferio.com/200055.jpg",
  },
];

export const addOnList = [
  {
    label: "Guacamole",
    value: "guacamole",
    img: guacamole,
  },
  {
    label: "Fresh Tomato Salsa",
    value: "tomato-salsa",
    img: tomatos,
  },
  {
    label: "Sour Cream",
    value: "sour-cream",
    img: sourCream,
  },
  {
    label: "Cheese",
    value: "cheese",
    img: cheese,
  },
];
