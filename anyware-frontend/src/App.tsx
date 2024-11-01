import { ThemeProvider } from "@mui/material";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { theme } from "./config/theme";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AppRoutes />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
