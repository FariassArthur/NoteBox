"use client"
import { useState } from "react";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";

export default function ThemeClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkTheme, setIsDarkMode] = useState<boolean>(true);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
}