import { dark } from '@theme-ui/presets';

const theme = {
  ...dark,
  containers: {
    page: {
      backgroundImage: "url('/backgroundsmall.png')",
      '@media (min-width: 850px)': {
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
      '@media (min-width: 650px)': {
        flexDirection: "row",
      },
      fontSize: "3.2rem",
      justifyContent: "space-between",
      color: "#fefdfb",
    },
    soundcloud: {
      width: "90vw",
      marginTop: "5vh"
    },
    vimeo: {
      marginTop: "10vh",
      padding: "56.25% 0 0 0",
      position: "relative",
    },
    icons: {
      display: "flex", flexDirection: "column", alignItems: "center", lineHeight: "1"
    },
    image: {
      marginTop: "2vh",
    }
  },
  styles: {
    ...dark.styles
  }
};

export default theme;