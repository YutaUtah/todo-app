import "./App.css";
import React from "react";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";

import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "./theme/theme";
// import { AuthContextProvider } from "./providers/Auth";
import { TodoContextProvider } from "./contexts/TodoContext";
import { BaseRoute } from "./router/BaseRouter";

const App = () => {
  return (
    <TodoContextProvider>
      <ChakraProvider theme={theme}>
        {/* <AuthContextProvider> */}
        <BaseRoute />
        {/* </AuthContextProvider> */}
      </ChakraProvider>
    </TodoContextProvider>
  );
};

export default App;
