import styled from "../TextPrintTest.module.css"
const ErrorPlaceholder = () => {
	return (
		<p className={styled.error_text}>
			Что-то пошло не так попробуйте перезагрузить страницу
		</p>
	)
}

export default ErrorPlaceholder
