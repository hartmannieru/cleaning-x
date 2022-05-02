import { Routes , Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Components from "./pages/Components";
import Main from "./pages/Main";
import GlobalStyle from "./styles/GlobalStyles";

const theme = {
  color: {
    white: '#ffffff',
    black: '#211F54',
    primary: '#0075FF',
    description: '#6E7191',
    grey: '#EFF0F6',
    transparent: 'transparent'
  }
}

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/components" element={<Components />} />
       </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
