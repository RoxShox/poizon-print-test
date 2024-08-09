import { FunctionComponent, ComponentPropsWithoutRef } from "react"

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
	text: string
}

const Button: FunctionComponent<ButtonProps> = ({ text, ...props }) => {
	return <button {...props}>{text}</button>
}

export default Button
