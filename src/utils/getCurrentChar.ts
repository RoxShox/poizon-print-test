import { TextType } from "../types/types"

type GetCurrentCharType = (
	charsArray: TextType[],
	currentIndex: number
) => TextType[]

// Проверяем на текущий символ и присваиваем соответствующий класс
export const getCurrentChar: GetCurrentCharType = (
	charsArray,
	currentIndex
) => {
	return charsArray.map((item, index) => {
		if (index === currentIndex) {
			return {
				...item,
				class: "current-char",
			}
		}

		return item
	})
}
