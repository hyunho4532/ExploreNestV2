import {createSlice} from "@reduxjs/toolkit";

export const buttonVisibility = createSlice({
    name: 'buttonVisibility',
    initialState: {
        value: false,
    },
    reducers: {
        toggleButton: (state) => {
            state.value = !state.value;
        }
    }
});

export const { toggleButton } = buttonVisibility.actions;
export default buttonVisibility.reducer;