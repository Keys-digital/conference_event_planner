import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
        img: "https://cdn.pixabay.com/photo/2022/02/20/02/29/projector-7023604_640.jpg",
        name: "Projectors",
        cost: 200,
        quantity: 0,
    },
    {
        img: "https://cdn.pixabay.com/photo/2023/01/06/15/44/speaker-7701551_640.png",
        name: "Speaker",
        cost: 35,
        quantity: 0,
    },
    {
        img: "https://cdn.pixabay.com/photo/2015/04/02/20/40/microphone-704255_640.jpg",
        name: "Microphones",
        cost: 45,
        quantity: 0,
    },
    {
        img: "https://cdn.pixabay.com/photo/2024/07/28/15/11/ai-generated-8927764_640.jpg",
        name: "Whiteboards",
        cost: 80,
        quantity: 0,
    },
    {
        img: "https://cdn.pixabay.com/photo/2017/08/06/22/17/building-2596951_640.jpg",
        name: "Signage",
        cost: 80,
        quantity: 0,
    },
 
],



  reducers: {
    incrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item) {
            item.quantity++;
        }
    },
    decrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item && item.quantity > 0) {
            item.quantity--;
        }
     },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;
export default avSlice.reducer;
