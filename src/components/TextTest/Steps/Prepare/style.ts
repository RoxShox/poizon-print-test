import { Box, styled } from "@mui/material"

export const StyledBoxControl = styled(Box)`
	& .MuiTypography-h5 {
		margin-bottom: 50px;
	}
	@media (max-width: 768px) {
		& .MuiTypography-h4 {
			font-size: 24px;
			padding-bottom: 20px;
		}
		& .MuiTypography-h5 {
			font-size: 18px;
			margin-bottom: 20px;
		}
	}
	@media (max-width: 450px) {
		& .MuiTypography-h4 {
			font-size: 20px;
			padding-bottom: 10px;
		}
		& .MuiTypography-h5 {
			font-size: 14px;
		}
	}
`
