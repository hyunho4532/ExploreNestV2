import { configureStore } from '@reduxjs/toolkit'
import buttonVisibilityReducer from "./features/buttonVisibility.ts";

export default configureStore({
    reducer: {
        buttonStatus: buttonVisibilityReducer
    },
})