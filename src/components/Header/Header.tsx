import styled from "./Header.module.css"

const Header = () => {
	return (
		<header className={`${styled.header} container`}>
			<div className={styled.header_container}>
				<h1>Print Test</h1>
			</div>
		</header>
	)
}

export default Header
