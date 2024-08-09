import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { secondsToEndTest } from "../../constants"

type TimerState = {
	isTimerOn: boolean
	seconds: number
}

const initialState: TimerState = {
	isTimerOn: false,
	seconds: secondsToEndTest,
}

const timerSlice = createSlice({
	name: "timerSlice",
	initialState,
	reducers: {
		setIsTimerOn(state, action: PayloadAction<boolean>) {
			state.isTimerOn = action.payload
		},
		decreaseSeconds(state) {
			state.seconds = state.seconds - 1
		},
		resetSeconds(state) {
			state.seconds = secondsToEndTest
		},
	},
})

export const { setIsTimerOn, decreaseSeconds, resetSeconds } =
	timerSlice.actions
export default timerSlice.reducer
