import { FunctionComponent } from "react"
import styled from "./Footer.module.css"
const Footer: FunctionComponent = () => {
	return (
		<footer className="container footer">
			<p className={styled.footer_text}>Made by Vladimir K. © 2024</p>
		</footer>
	)
}

export default Footer
