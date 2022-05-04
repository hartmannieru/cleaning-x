import { createGlobalStyle } from 'styled-components'
import RobotoRegularWoff from '../fonts/RobotoRegular.woff';
import RobotoRegularWoff2 from '../fonts/RobotoRegular.woff2';
import RobotoBoldWoff from '../fonts/RobotoBold.woff';
import RobotoBoldWoff2 from '../fonts/RobotoBold.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoRegularWoff}) format('woff'), url(${RobotoRegularWoff2}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBoldWoff}) format('woff'), url(${RobotoBoldWoff2}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    outline: none;
    border: none;
  }
`

export default GlobalStyle