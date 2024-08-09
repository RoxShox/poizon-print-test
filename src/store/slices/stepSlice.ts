import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { TestStep } from "../../enum"

type StepState = {
	currentStep: TestStep
}

const initialState: StepState = {
	currentStep: TestStep.Prepare,
}

const stepSlice = createSlice({
	name: "stepSlice",
	initialState,
	reducers: {
		setStep(state, action: PayloadAction<TestStep>) {
			state.currentStep = action.payload
		},
	},
})

export const { setStep } = stepSlice.actions

export default stepSlice.reducer
