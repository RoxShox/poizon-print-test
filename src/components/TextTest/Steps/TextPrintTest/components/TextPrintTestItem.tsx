import { TextType } from "../../../../../types/types"

interface TextItemProps {
	item: TextType
}

const TextItem = ({ item }: TextItemProps) => {
	return <span className={item.class}>{item.char}</span>
}

export default TextItem
