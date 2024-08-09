import TextItem from "./TextPrintTestItem"

import { TextType } from "../../../../../types/types"

import styled from "../TextPrintTest.module.css"
interface TextPrintTestList {
	isLoading: boolean
	text: TextType[]
}

const TextPrintTestList = ({ isLoading, text }: TextPrintTestList) => {
	if (isLoading) {
		return <p className={styled.test_loading_text}>Loading text...</p>
	}

	return (
		<div>
			{text.map((item, index) => (
				<TextItem item={item} key={index} />
			))}
		</div>
	)
}

export default TextPrintTestList
