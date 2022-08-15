import { createTheme } from '@mui/material';

const colors = {
	primaryText: '#000000',
	hoverText: '#FF9846',
	grayText: '#A4ACAD',
	buttonsLightGrayText: '#F2F2F2',
	primaryButton: '#F46D40',
	secondaryButton: '#FF9846',
	backgroungColor: '#E5E5E5',
};

const theme = createTheme({
	palette: {
		primary: {
			main: colors.primaryButton,
		},
		secondary: {
			main: colors.secondaryButton,
		},
		backgroungColor: {
			main: colors.backgroungColor,
		},

		text: {
			primary: colors.primaryText,
			secondary: colors.grayText,
			hoverText: colors.hoverText,
			btnText: colors.buttonsLightGrayText,
		},
	},

	typography: {
		fontFamily: "'Nunito Sans', sans-serif",
	},
});

export default theme;
