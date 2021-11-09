import { dark } from '@theme-ui/presets';

const theme = {
  ...dark,
  containers: {
    page: {
      backgroundImage: "url('/backgroundsmall.png')",
      '@media screen and (min-width: 416px)': {
        backgroundImage: "url('/background.png')",
      },
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "100vh",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    main: {
      display: "flex",
      flexDirection: "column",
      fontSize: "5.2rem",
      alignItems: "center",
      color: "black",
    },
    nav: {
      margin: "0 5vw",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      '@media screen and (min-width: 416px)': {
        flexDirection: "row",
      },
      fontSize: "3.2rem",
      justifyContent: "space-between",
      color: "#fefdfb",
    }
  },
  styles: {
    ...dark.styles
  }
};

export default theme;