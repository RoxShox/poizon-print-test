declare module "*.svg" {
	const content: any
	export default content
}

declare module "*.png" {
	const content: any
	export default content
}

declare module "*.jpg" {
	const content: any
	export default content
}
declare module "*.css" {
	const content: any
	export default content
}

declare module "*.svg" {
	import React = require("react")
	export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
	const src: string
	export default src
}
