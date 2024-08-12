// Рассчитваем скорость печати
export function speedCounting(correctLetters: number, seconds: number) {
	const words = correctLetters / 5
	const minutes = seconds / 60

	return (words / minutes).toFixed(2)
}
