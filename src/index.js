import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import React from "react";

import ReactDOM from "react-dom/client";
import Routes from "./routes/Routes.jsx";

const colors = {
  primary: "#008080",
  secondary: "#023047",
  tertiary: "#181116",
};

const fonts = {
  heading: `'Mukta'`,
  body: `'Mukta'`,
};

const styles = {
  "html, body": {
    backgroundColor: mode("gray.900", "gray.100"),
  },
};

const theme = extendTheme({ colors, fonts, styles });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider
      theme={theme}
      toastOptions={{
        defaultOptions: { position: "top", duration: 9000, isClosable: true },
      }}
    >
      <Routes />
    </ChakraProvider>
  </React.StrictMode>
);
