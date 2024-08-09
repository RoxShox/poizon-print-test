import { Typography } from "@mui/material"

import Button from "../../../../ui/components/Button/Button"

import { useAppDispatch } from "../../../../store/hooks"
import { setStep } from "../../../../store/slices/stepSlice"

import { TestStep } from "../../../../enum"

import styled from "./Prepare.module.css"
import { StyledBoxControl } from "./style"
const Prepare = () => {
	const dispatch = useAppDispatch()
	const nextStep = () => {
		dispatch(setStep(TestStep.PrintTest))
	}

	return (
		<main className="container main">
			<StyledBoxControl className={styled.prepare_box}>
				<Typography
					className={`${styled.prepare_box_title} `}
					variant="h4"
					component="h1"
				>
					Тест для проверки скорости печати
				</Typography>
				<Typography
					className={`${styled.prepare_box_subtitle} `}
					variant="h5"
					component="h2"
				>
					Как только вы начнёте печатать запустится таймер обратного отсчета
				</Typography>
				<Button
					className={styled.prepare_box_btn}
					text="start"
					onClick={nextStep}
				/>
			</StyledBoxControl>
		</main>
	)
}

export default Prepare
