// Рассчитываем процент ошибок в нашем тесте
export function accuracyCounting(mistakes: number, pressingCount: number) {
	return (100 - (mistakes / pressingCount) * 100).toFixed(2)
}
