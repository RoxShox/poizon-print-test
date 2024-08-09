import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import TextTest from "./components/TextTest/TextTest"

import "./style/typography.css"

function App() {
	return (
		<div className="app">
			<div className="container">
				<div className="flex-container">
					<Header />

					<TextTest />

					<Footer />
				</div>
			</div>
		</div>
	)
}

export default App
