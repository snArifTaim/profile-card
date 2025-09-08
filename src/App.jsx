import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyle from "./GlobalStyle";
import Card from "./components/Card";

export default function App() {
  useEffect(() => {
    document.title = "Profile Card";
  }, []);
  const [size, setSize] = useState("large");

  const toggleSize = () => {
    setSize(size === "large" ? "small" : "large");
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Card size={size} toggleSize={toggleSize} />
    </ThemeProvider>
  );
}
