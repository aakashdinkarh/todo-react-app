import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
    /* --maxWidth: 1280px; */
    --white: #fff;
    /* --lightGrey: #eee;
    --medGrey: #353535;
    --darkGrey: #1c1c1c; */
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
    --roseWater: #9e6a6e;
    --dustyRose: #eed6d3;
    --darkCoffee: #67595e;
    --lightCoffee: #a49393;
  }
  * {
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
  }
  html,body,#root {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
  }
  a {
    color: black;
    display: inline-block;
  }
  `;
