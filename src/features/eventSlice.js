import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  event: []
};

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    createEvent: (state, action) => {
      console.log("state" + state);
      console.log("payload" + action.payload);
      state.event = [...state.event, action.payload];
      console.log('updated' + state);
    },
  },
});

export const { createEvent } = eventSlice.actions;

export const selectevent = (state) => state.event.event;

export default eventSlice.reducer;
