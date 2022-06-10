import { createSlice } from "@reduxjs/toolkit";
import {
  beansList,
  meatList,
  riceList,
  tortillaList,
} from "../components/utils";

export const burritoIngredients = createSlice({
  name: "burritoIngredients",
  initialState: {
    activeStep: 0,
    cart: [],
    editingBurritoId: "",
    editingBurrito: false,
    selectedTortilla: tortillaList[0],
    selectedMeat: meatList[0],
    selectedRice: riceList[0],
    selectedBeans: beansList[0],
    selectedAddOns: [],
  },
  reducers: {
    stepForward: (state) => {
      state.activeStep = state.activeStep + 1;
    },
    stepBackward: (state) => {
      state.activeStep = state.activeStep - 1;
    },
    resetStep: (state) => {
      state.activeStep = 0;
    },
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
    resetBurrito: (state) => {
      state.selectedTortilla = tortillaList[0];
      state.selectedMeat = meatList[0];
      state.selectedRice = riceList[0];
      state.selectedBeans = beansList[0];
      state.selectedAddOns = [];
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    editBurrito: (state, action) => {
      state.editingBurrito = true;
      state.editingBurritoId = action.payload.id;
      state.selectedTortilla = action.payload.ingredients.selectedTortilla;
      state.selectedMeat = action.payload.ingredients.selectedMeat;
      state.selectedRice = action.payload.ingredients.selectedRice;
      state.selectedBeans = action.payload.ingredients.selectedBeans;
      state.selectedAddOns = action.payload.ingredients.selectedAddOns;
    },
    emptyCart: (state) => {
      state.cart = [];
      state.activeStep = 0;
    },
    updateBurrito: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      state.cart.push(action.payload);
      state.editingBurrito = false;
    },
  },
});

export const {
  stepForward,
  stepBackward,
  resetStep,
  updateTortilla,
  updateMeat,
  updateRice,
  updateBeans,
  addAddOn,
  removeAddOn,
  resetBurrito,
  addToCart,
  removeFromCart,
  editBurrito,
  emptyCart,
  updateBurrito,
} = burritoIngredients.actions;

export default burritoIngredients.reducer;
