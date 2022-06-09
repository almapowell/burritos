import { createSlice } from "@reduxjs/toolkit";

export const burritoIngredients = createSlice({
  name: "burritoIngredients",
  initialState: {
    selectedTortilla: {
      label: "Wheat",
      value: "wheat",
      img: "https://cdn.caferio.com/200050.jpg",
    },
    selectedMeat: {
      label: "Beef",
      value: "beef",
      img: "https://cdn.caferio.com/50220.jpg",
    },
    selectedRice: {
      label: "White Rice",
      value: "white",
      img: "https://cdn.caferio.com/200072.jpg",
    },
    selectedBeans: {
      label: "Black Beans",
      value: "black",
      img: "https://cdn.caferio.com/251001.jpg",
    },
    selectedAddOns: [],
    cart: [],
  },
  reducers: {
    updateTortilla: (state, action) => {
      state.selectedTortilla = action.payload;
    },
    updateMeat: (state, action) => {
      state.selectedMeat = action.payload;
    },
    updateRice: (state, action) => {
      state.selectedRice = action.payload;
    },
    updateBeans: (state, action) => {
      state.selectedBeans = action.payload;
    },
    addAddOn: (state, action) => {
      state.selectedAddOns.push(action.payload);
    },
    removeAddOn: (state, action) => {
      state.selectedAddOns = state.selectedAddOns.filter(
        (item) => item.value !== action.payload.value
      );
    },
    resetAll: (state) => {
      state.selectedTortilla = {
        label: "Wheat",
        value: "wheat",
        img: "https://cdn.caferio.com/200050.jpg",
      };
      state.selectedMeat = {
        label: "Beef",
        value: "beef",
        img: "https://cdn.caferio.com/50220.jpg",
      };
      state.selectedRice = {
        label: "White Rice",
        value: "white",
        img: "https://cdn.caferio.com/200072.jpg",
      };
      state.selectedBeans = {
        label: "Black Beans",
        value: "black",
        img: "https://cdn.caferio.com/251001.jpg",
      };
      state.selectedAddOns = [];
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const {
  updateTortilla,
  updateMeat,
  updateRice,
  updateBeans,
  addAddOn,
  removeAddOn,
  resetAll,
  addToCart,
  removeFromCart,
} = burritoIngredients.actions;

export default burritoIngredients.reducer;
