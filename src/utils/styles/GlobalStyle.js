import { createGlobalStyle } from 'styled-components'
import colors from './colors'

const GlobalStyle = createGlobalStyle`
// globals css rules here
* {
    box-sizing: border-box;
}

html {
	font-size: 1rem;
    color: ${colors.neutral700};
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    scroll-behavior: smooth;
}

#root {
  margin: auto;
  max-width: 1920px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  min-height: 100vh;
}

main {
    flex: 1;
  }

p {
    line-height: 1.5;
  }
ul {
    margin: 0;
    padding: 0;
  
    list-style-type: none;
  }

  .sr-only {
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important; /* 2 */
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important; /* 3 */
}
`

export default GlobalStyle
