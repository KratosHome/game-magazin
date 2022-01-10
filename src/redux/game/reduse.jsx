import { createSlice } from "@reduxjs/toolkit";

const gamesSlise = createSlice({
  name: "games",
  initialState: {
    currentGame: null,
  },
  reducers: {
    setCurrentGame: (state, action) => {
      state.currentGame = action.payload;
    },
  },
});

export const { setCurrentGame } = gamesSlise.actions;
export default gamesSlise.reducer;
