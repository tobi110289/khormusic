import { dark } from '@theme-ui/presets';

const theme = {
  ...dark,
  containers: {
    page: {
      '@media screen and (max-width : 850px) and (orientation : portrait) ': {
        backgroundImage: "url('/backgroundsmall.png')",
      },
      backgroundImage: "url('/background.png')",
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
      '@media screen and (max-width : 850px)': {
        fontSize: "4.2rem",
      },
      '@media screen and (max-width : 850px) and (orientation : landscape) ': {
        fontSize: "2.2rem !important",
        flexDirection: "row",
      },
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
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      lineHeight: "1",
      '@media screen and (max-width : 850px) and (orientation : landscape) ': {
        flexDirection: "row",
        lineHeight: "0.1",
      },
    },
    image: {
      marginTop: "2vh",
    },
    insta: {
      width: "3.2rem",
      '@media screen and (max-width : 850px) and (orientation : landscape) ': {
        width: "2.5rem"
      },
    },
    mail: {
      width: "4.9rem",
      '@media screen and (max-width : 850px) and (orientation : landscape) ': {
        width: "3.8rem"
      },
    }
  },
  styles: {
    ...dark.styles
  }
};

export default theme;