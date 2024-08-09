import { useState, useEffect } from "react"

import Button from "../../../../ui/components/Button/Button"

import { useAppDispatch, useAppSelector } from "../../../../store/hooks"
import { resetTextState } from "../../../../store/slices/textSlice"
import { resetSeconds } from "../../../../store/slices/timerSlice"
import { setIsTestStarted } from "../../../../store/slices/printTestSlice"
import { setStep } from "../../../../store/slices/stepSlice"

import { TestStep } from "../../../../enum"
import { secondsToEndTest } from "../../../../constants"

import {
	accuracyCounting,
	speedCounting,
} from "../../../../utils/statsCounting"

import styled from "./Stats.module.css"
const Stats = () => {
	const [speed, setSpeed] = useState("0.00")
	const [accuracy, setAccuracy] = useState("0.00")
	const dispatch = useAppDispatch()

	const mistakes = useAppSelector((state) => state.textSlice.mistakes)
	const pressingCount = useAppSelector((state) => state.textSlice.pressingCount)

	//При рендере компонента вычисляем значения скорости печати и процент ошибок
	useEffect(() => {
		const correctLetters = pressingCount - mistakes

		setAccuracy(accuracyCounting(mistakes, pressingCount))
		setSpeed(speedCounting(correctLetters, secondsToEndTest))
	}, [])

	// Ф-ция для сброса состояния и нового старта приложения
	const handleNewTest = () => {
		dispatch(resetTextState())
		dispatch(resetSeconds())
		dispatch(setIsTestStarted(false))
		dispatch(setStep(TestStep.Prepare))
	}

	return (
		<div className={styled.stats_wrap}>
			<div>
				<p className="mid-header uppercase-text">speed</p>
				<p className="uppercase-text">{speed} WPM</p>
			</div>
			<div>
				<p className="mid-header uppercase-text ">accuracy</p>
				<p className="uppercase-text">{accuracy} %</p>
			</div>
			<Button
				className={styled.stats_btn}
				text="Начать новый тест"
				onClick={handleNewTest}
			/>
		</div>
	)
}

export default Stats
