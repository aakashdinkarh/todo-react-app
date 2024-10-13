import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
body {
  --dark-bg-color: #2d3436;
  --light-bg-color: #f0f2f5;
}

body.light-theme {
  --bg-color: #f0f2f5;
  --text-color: #000;
  --accent-color: #6c63ff;
  --secondary-color: #fd79a8;
}
  
body.dark-theme {
  --bg-color: #2d3436;
  --text-color: #dfe6e9;
  --accent-color: #55efc4;
  --secondary-color: #ff7675;
}

* {
  box-sizing: border-box;
  font-family: 'Abel', sans-serif;
}

html, body, #root {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
}

a {
  display: inline-block;
}
`;
