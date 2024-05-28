<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from './routes/index.tsx'
import { GlobalStyles } from './styles/global.ts'
import { appTheme } from './styles/theme.ts'
import { ThemeProvider } from 'styled-components'
=======
import React from "react";
import ReactDOM from "react-dom/client";
import { AppRoutes } from "./routes/index.tsx";
import { ThemeProvider } from "styled-components";
import { appTheme } from "./styles/theme.ts";
import { GlobalStyles } from "./styles/global.ts";
>>>>>>> 93964a39d37457b7e3c58a6bcc2baa9de02e22d2

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
<<<<<<< HEAD
    <AppRoutes />
    <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
)
=======
      <AppRoutes />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);
>>>>>>> 93964a39d37457b7e3c58a6bcc2baa9de02e22d2
