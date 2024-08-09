import axios from "axios"

export const getText = async () => {
	const res = await axios.get<string>("https://baconipsum.com/api/", {
		params: {
			type: "all-meat",
			format: "text",
			sentences: 4,
		},
	})
	return res
}
