import { defaultTheme } from "react-admin";
import { createTheme} from '@mui/material/styles';
import  createPalette  from '@mui/material/styles/createPalette';
import merge from "lodash/merge";

const palette = createPalette(
  merge({}, defaultTheme.palette, {
    secondary: {
      main: "#2c3c64",
    },
    primary: {
      main: "#CA2C68"
    }
  })
);
const overrides =  {
  RaSidebar: {
    drawerPaper: {
      backgroundColor: palette.common.white,
      color: palette.primary.main,
      height: "100%",
      boxShadow:
        "2px 0px 1px -1px rgba(0,0,0,0.2), 1px 0px 3px 0px rgba(0,0,0,0.1)",
    },
  },
};

const  breakpoints = {
    values: {
      xs: 12,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  };

const compigTheme = {
    palette,
    overrides,
    breakpoints
};

const theme = createTheme(merge({}, defaultTheme, compigTheme));


export default theme;