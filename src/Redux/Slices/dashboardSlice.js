import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedLink: "Leaderboards",
};

export const dashboardSlice = createSlice({
    name: "dashboardSlice",
    initialState,
    reducers: {
        selectLink: (state, action) => {
            state.selectedLink = action.payload;
        },
    },
});

export const { selectLink } = dashboardSlice.actions;

export default dashboardSlice.reducer;
