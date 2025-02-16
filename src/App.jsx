import React, { useState } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

// Yorqin va qorongʻi themelar
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
});

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  let darkmode = JSON.parse(localStorage.getItem("dark"));
  darkmode;

  return (
    <ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
      <CssBaseline />

      <div>
        <Header
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          darkmode={darkmode}
        />
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;
