import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type PrintTestSliceState = {
	isTestStarted: boolean
	isTestFinished: boolean
	sentences: string
}

const initialState: PrintTestSliceState = {
	isTestStarted: false,
	isTestFinished: false,
	sentences: "4",
}

const printTestSlice = createSlice({
	name: "printTestSlice",
	initialState,
	reducers: {
		setIsTestStarted(state, action: PayloadAction<boolean>) {
			state.isTestStarted = action.payload
		},
		setIsTestFinished(state, action: PayloadAction<boolean>) {
			state.isTestFinished = action.payload
		},
		resetTestState(state) {
			state.isTestStarted = false
			state.isTestFinished = false
			state.sentences = "4"
		},
	},
})

export const { setIsTestStarted, setIsTestFinished, resetTestState } =
	printTestSlice.actions

export default printTestSlice.reducer
