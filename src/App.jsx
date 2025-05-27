import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Globalstyle } from "./style/global";
import { AppRouter } from "./routes/AppRouter";
import { themes } from "./style/themes";
import Header from "./components/header";

function App() {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Globalstyle />
      <Header toggleTheme={toggleTheme} currentTheme={theme} />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;


