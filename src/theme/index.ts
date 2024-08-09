import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: '#ff1744',
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            'Manrope'
        ].join(','),
        // fontFamily: ', Arial',
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
              font-family: 'Manrope';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
            }
          `,
        },
    },
});
