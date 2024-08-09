import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import ErrorPlaceholder from "./components/ErrorPlaceholder"
import TextPrintTestList from "./components/TextPrintTestList"

import { useAppDispatch, useAppSelector } from "../../../../store/hooks"
import {
	fetchText,
	increasePressingCount,
	setCurrentCharIndex,
	setMistakes,
	setText,
} from "../../../../store/slices/textSlice"
import {
	decreaseSeconds,
	setIsTimerOn,
} from "../../../../store/slices/timerSlice"
import { setStep } from "../../../../store/slices/stepSlice"

import { TestStep } from "../../../../enum"

import { compareChars, getCurrentChar } from "../../../../utils/charTransform"

import styled from "./TextPrintTest.module.css"

const TextPrintTest = () => {
	const dispatch = useAppDispatch()

	const { currentCharIndex, isLoading, error, mistakes, pressingCount, text } =
		useAppSelector((state) => state.textSlice)
	const sentences = useAppSelector((state) => state.printTestSlice.sentences)
	const { seconds, isTimerOn } = useAppSelector((state) => state.timerSlice)

	// Получаем от сервера наш текст для теста
	useEffect(() => {
		dispatch(fetchText(sentences))
	}, [dispatch])

	// Следим за текущим индеком символа текста и присваиваем ему соответстующий класс
	useEffect(() => {
		const newText = getCurrentChar(text, currentCharIndex)
		dispatch(setText(newText))
	}, [dispatch, currentCharIndex])

	useEffect(() => {
		// Если мы уже напечатали первый символ, то запускаем таймер
		if (pressingCount === 1 && text.length > 0) {
			dispatch(setIsTimerOn(true))
		}

		//Отслеживаем клавишу и проводим с ней дальнейшие манипуляции
		const keyPressHandler = (event: KeyboardEvent) => {
			// Достаем из функции новый массив,
			const { resultArr, newCurrentIndex, newMistakes } = compareChars(
				text,
				currentCharIndex,
				event.key,
				mistakes
			)

			dispatch(setCurrentCharIndex(newCurrentIndex))
			dispatch(setText(resultArr))
			dispatch(setMistakes(newMistakes))
			dispatch(increasePressingCount())
		}

		document.addEventListener("keypress", keyPressHandler)

		return () => {
			document.removeEventListener("keypress", keyPressHandler)
		}
	}, [dispatch, text])

	// Запускаем таймер
	useEffect(() => {
		if (isTimerOn) {
			const timer = setTimeout(() => {
				dispatch(decreaseSeconds())
				// по истечению времени перенаправляем на страницу статистики
				if (seconds === 0) {
					dispatch(setIsTimerOn(false))
					dispatch(setStep(TestStep.Stats))
				}
			}, 1000)
			return () => clearTimeout(timer)
		}
	}, [isTimerOn, seconds, dispatch])

	return (
		<div className={styled.test_text_wrapper}>
			<p className={styled.test_timer}>{seconds}c</p>
			{error && <ErrorPlaceholder />}
			<TextPrintTestList isLoading={isLoading} text={text} />
		</div>
	)
}

export default TextPrintTest
