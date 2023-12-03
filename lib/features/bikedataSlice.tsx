import { createSlice } from "@reduxjs/toolkit";

const initialState = { cities: [], status: "loading", cityCapitals: [] };

const bikedataSlice = createSlice({
  name: "bikedata",
  initialState,
  reducers: {
    addCitiesData: (state, action) => {
      const newList = [];
      const newCapitals = [];
      action.payload.networks.forEach((network) => {
        if (network.location.country === "DE") {
          newList.push({
            city: network.location.city,
            href: network.href,
            name: network.name,
            latitude: network.location.latitude,
            longitude: network.location.longitude,
            id: network.id,
          });
          const { city } = network.location;
          const firstLetter = city.charAt(0);
          if (newCapitals.indexOf(firstLetter) === -1) {
            newCapitals.push(firstLetter);
          }
        }
      });
      return {
        ...state,
        cities: [...newList],
        cityCapitals: [...newCapitals],
        status: "completed",
      };
    },
  },
});

export const { addCitiesData } = bikedataSlice.actions;
export default bikedataSlice.reducer;
