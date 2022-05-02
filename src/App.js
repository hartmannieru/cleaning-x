import { ThemeProvider } from "styled-components";
import Button from "./components/Button";
import Buttons from "./components/Buttons";
import GlobalStyle from "./styles/GlobalStyles";

const theme = {
  color: {
    white: '#ffffff',
    black: '#211F54',
    primary: '#0075FF',
    grey: '#EFF0F6',
    transparent: 'transparent'
  }
}

function App() {
  return (
    <>
      <div className="container">
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Buttons>
            <Button>
              Get a free quote
            </Button>
            <Button full={false}>
              Explore services
            </Button>
          </Buttons>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
