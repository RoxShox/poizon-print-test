import { FunctionComponent } from "react"
import logo from "../../assets/img/logo.svg"
import style from "./Header.module.css"

const Header: FunctionComponent = () => {
	return (
		<header className={`${style.header} container`}>
			<div className={style.header_container}>
				<img src={logo} alt="site logo" />
				<h1 className="large-header">Print Test</h1>
			</div>
		</header>
	)
}

export default Header
