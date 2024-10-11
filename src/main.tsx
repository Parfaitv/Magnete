import "./index.css";
import { App } from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { store } from "./store";
import { themeOptions } from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider theme={themeOptions}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </BrowserRouter>
);
