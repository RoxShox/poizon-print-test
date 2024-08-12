import { TextType } from "../types/types"

type CompareCharsType = (
	charsArray: TextType[],
	currentIndex: number,
	pressedKey: string,
	mistakes: number
) => { resultArr: TextType[]; newCurrentIndex: number; newMistakes: number }

// Проверяем символ на правильность написания и присваиваем соответствующий класс
export const compareChars: CompareCharsType = (
	charsArray,
	currentIndex,
	pressedKey,
	mistakes
) => {
	let newCurrentIndex = currentIndex
	let newMistakes = mistakes

	const resultArr = charsArray.map((item, index) => {
		if (index === currentIndex && item.char === pressedKey) {
			newCurrentIndex += 1
			return {
				...item,
				class: "right-char",
			}
		} else if (index === currentIndex && item.char !== pressedKey) {
			newMistakes += 1
			return {
				...item,
				class: "error-char",
			}
		}

		return item
	})

	return { resultArr, newCurrentIndex, newMistakes }
}
