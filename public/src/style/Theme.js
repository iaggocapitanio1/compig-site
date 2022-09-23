import { defaultTheme } from "react-admin";
import { createTheme } from "@mui/system";
import merge from "lodash/merge";

const theme = createTheme(
  merge({}, defaultTheme, {
    palette: {
      // Your theme goes here
      // Write the following code to have an orange app bar. We'll explain it later in this article.
      secondary: {
        main: "#2c3c64", // Not far from orange
      },
      primary:{
        main: "#CA2C68"
      }
    }
  })
);

export default theme;


