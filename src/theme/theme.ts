import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundImage: `${String(
          process.env.PUBLIC_URL
        )}/images/bg_image.jpg`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "blue.800",
        color: "white",
      },
    },
  },
});
export default theme;
