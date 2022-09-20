import { createTheme } from "@material-ui/core/styles";

const arcBlue = "#0b72b9";
const arcOrange = "#ffba60;";
export default createTheme({
  palette: {
    common: {
      arcBlue: `${arcBlue}`,
      arcOrange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    // h3: {
    //     fontWeight: '300'
    // }
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
      },
      estimate: {
           fontFamily: 'Pacifico',
        fontSize: '1rem',
          textTransform: 'none',
        color: 'white'
      }
  },
});
