import { extendTheme } from "@chakra-ui/react";
import background from "../images/bg_image.jpg";

const theme = extendTheme({
  styles: {
    global: {
      html: {
        height: "-webkit-fill-available",
      },
      body: {
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "blue.800",
        color: "white",
      },
    },
  },
});
export default theme;
