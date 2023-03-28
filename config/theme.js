import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#221818',
      lightpurple: '#9E61BE'
    },
    secondary: {
      main: '#9E61BE',
    },
    error: {
      main: red.A400,
    },
    typography: {
      "fontFamily": `"space-grotesk"`,
      "fontSize": 14,
      "fontWeightLight": 300,
      "fontWeightRegular": 400,
      "fontWeightMedium": 500
     }
  },
});
export default theme;