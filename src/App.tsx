import { BrowserRouter } from "react-router-dom";

import AppProvider from "./hooks";

import Routes from "./routes";

import GlobalStyle from "./styles/global";

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}
