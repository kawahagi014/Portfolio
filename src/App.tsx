import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import { Router } from "./components/router/Router";
import theme from "./theme/theme";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <RecoilRoot>
        {/* basename…本番環境用 */}
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          {/* <BrowserRouter> */}
          <Router />
        </BrowserRouter>
      </RecoilRoot>
    </ChakraProvider>
  );
}
