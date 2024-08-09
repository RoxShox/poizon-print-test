import Prepare from "./Steps/Prepare/Prepare"
import TextPrintTest from "./Steps/TextPrintTest/TextPrintTest"
import Stats from "./Steps/Stats/Stats"

import { useAppSelector } from "../../store/hooks"

import { TestStep } from "../../enum"

const TextTest = () => {
	const { currentStep } = useAppSelector((state) => state.stepSlice)

	switch (currentStep) {
		case TestStep.Prepare:
			return <Prepare />

		case TestStep.PrintTest:
			return <TextPrintTest />

		case TestStep.Stats:
			return <Stats />
	}
}

export default TextTest
