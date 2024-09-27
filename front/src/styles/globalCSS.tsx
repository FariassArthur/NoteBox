import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
 :root { --max-width: 1100px;
  --border-radius: 12px;

  --transition-duration: 0.2s;
  --padding: 1rem;
  --border: 8px;

  --background-color: #f0f0f0;
  --aside-background: rgba(0, 0, 0, 0.2);
  --aside-border: rgba(0, 0, 0, 0.5);

  --icon-color: rgba(0, 0, 0, 0.5);
  --icon-colored: #f11736;
}

* {
  padding: 0;
  margin: 0;
  padding: 0;
  text-decoration: none;
}


`

export default GlobalStyle