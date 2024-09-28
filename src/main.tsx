
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ui/theme.provider.tsx";
import { Toaster } from "./components/ui/sonner.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
createRoot(document.getElementById("root")!).render(

    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route
              path="/*"
              element={
                <>
                  <App />
                  <Toaster duration={5000} closeButton />
                </>
              }
            />
          </Routes>
        </Router>
      </Provider>
    </ThemeProvider>

);
