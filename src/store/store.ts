import { configureStore } from "@reduxjs/toolkit"

import printTestReducer from "./slices/printTestSlice"
import textReducer from "./slices/textSlice"
import timerReducer from "./slices/timerSlice"
import stepReducer from "./slices/stepSlice"

const store = configureStore({
	reducer: {
		textSlice: textReducer,
		printTestSlice: printTestReducer,
		timerSlice: timerReducer,
		stepSlice: stepReducer,
	},
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
