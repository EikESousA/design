import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html[data-theme='light'] {
    --color-primary-lighter: #77c38e;
    --color-primary-light: #5cb777;
    --color-primary-base: #4eb16c;
    --color-primary-dark: #42965b;
    --color-primary-darker: #367b4b;

    --color-success-light: #94BFA2;
    --color-success-base: #2E8540;
    --color-success-dark: #266E35;

    --color-danger-light: #F5ADB9;
    --color-danger-base: #E31C3D;
    --color-danger-dark: #B31E22;

    --color-warning-light: #FAD980;
    --color-warning-base: #FDB81E;
    --color-warning-dark: #CA9318;

    --color-new-light: #9BDAF1;
    --color-new-base: #02BFE7;
    --color-new-dark: #00A6D2;

    --color-white: #ffffff;
    --color-black: #000000;

    --color-gray-100: #FAFAFA;
    --color-gray-200: #F5F5F5;
    --color-gray-300: #EEEEEE;
    --color-gray-400: #E0E0E0;
    --color-gray-500: #BDBDBD;
    --color-gray-600: #757575;
    --color-gray-700: #616161;
    --color-gray-800: #424242;
    --color-gray-900: #212121;

    --aliases-100: #FAFAFA;
    --aliases-200: #F5F5F5;
    --aliases-300: #EEEEEE;
    --aliases-400: #E0E0E0;
    --aliases-500: #BDBDBD;
    --aliases-600: #757575;
    --aliases-700: #616161;
    --aliases-800: #424242;
    --aliases-900: #212121;

    --aliases-100-transparent: #FAFAFA40;

    --color-switch: #F5F5F5;
    --color-switch-hover: #EEEEEE;
  }

  html[data-theme='dark'] {
    --color-primary-lighter: #77c38e;
    --color-primary-light: #5cb777;
    --color-primary-base: #4eb16c;
    --color-primary-dark: #42965b;
    --color-primary-darker: #367b4b;

    --color-success-light: #94BFA2;
    --color-success-base: #2E8540;
    --color-success-dark: #266E35;

    --color-danger-light: #F5ADB9;
    --color-danger-base: #E31C3D;
    --color-danger-dark: #B31E22;

    --color-warning-light: #FAD980;
    --color-warning-base: #FDB81E;
    --color-warning-dark: #CA9318;

    --color-new-light: #9BDAF1;
    --color-new-base: #02BFE7;
    --color-new-dark: #00A6D2;

    --color-white: #ffffff;
    --color-black: #000000;

    --color-gray-100: #2d2e2f;
    --color-gray-200: #444546;
    --color-gray-300: #5b5c5e;
    --color-gray-400: #727375;
    --color-gray-500: #888a8d;
    --color-gray-600: #9fa1a4;
    --color-gray-700: #b6b8bc;
    --color-gray-800: #cdcfd3;
    --color-gray-900: #E4E6EB;

    --aliases-100: #242627;
    --aliases-200: #303335;
    --aliases-300: #3d3f42;
    --aliases-400: #494c4f;
    --aliases-500: #55585d;
    --aliases-600: #62656a;
    --aliases-700: #6e7277;
    --aliases-800: #7b7e85;
    --aliases-900: #888b91;

    --aliases-100-transparent: #24262740;

    --color-switch: #E4E6EB;
    --color-switch-hover: #FFFFFF;
  }

  html {
    --font-family-default: Roboto, sans-serif;
    --font-family-title: Poppins, sans-serif;
    --font-family-subtitle: Inter, sans-serif;

    --font-weight-lighter: lighter;
    --font-weight-regular: regular;
    --font-weight-medium: medium;
    --font-weight-bold: bold;

    --font-size-xxs: 0.625rem;
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-md: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-xl2: 1.5rem;
    --font-size-xl4: 2rem;
    --font-size-xl5: 2.25rem;
    --font-size-xl6: 3rem;
    --font-size-xl7: 4.5rem;
    --font-size-xl8: 6rem;

    --font-line-heights-none: 100%;
    --font-line-heights-shorter: 120%;
    --font-line-heights-short: 140%;
    --font-line-heights-base: 180%;
    --font-line-heights-tall: 200%;

    --border-radius-default: 0px;
    --border-radius-xs: 2.5px;
    --border-radius-sm: 5px;
    --border-radius-md: 10px;
    --border-radius-lg: 20px;
    --border-radius-full: 9999px;
    --border-radius-circle: 50%;

    --border-width-default: 0px;
    --border-width-thin: 1px;
    --border-width-medium: 1.8px;
    --border-width-thick: 2px;
    --border-width-heavy: 4px;

    --box-shadow-default: 0;
    --box-shadow-base: 0px 2px 8px 0px rgba(99, 99, 99, 0.2);

    --opacity-default: 100%;
    --opacity-semi-opaque: 90%;
    --opacity-intense: 75%;
    --opacity-medium: 50%;
    --opacity-light: 25%;
    --opacity-semi-transparent: 10%;

    --spacing-px: 1px;
    --spacing-s1: 0.25rem;
    --spacing-s2: 0.50rem;
    --spacing-s3: 0.75rem;
    --spacing-s4: 1rem;
    --spacing-s5: 1.25rem;
    --spacing-s6: 1.50rem;
    --spacing-s7: 1.75rem;
    --spacing-s8: 2rem;
    --spacing-s10: 2.50rem;
    --spacing-s12: 3rem;
    --spacing-s13: 3.25rem;
    --spacing-s14: 3.5rem;
    --spacing-s15: 3.75rem;
    --spacing-s16: 4rem;

    --animation-instant: 0ms;
    --animation-faster: 100ms;
    --animation-fast: 200ms;
    --animation-normal: 300ms;
    --animation-slow: 400ms;
    --animation-slower: 500ms;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;

    @media screen and (max-width: 600px) {
      font-size: 67.75%;
    }
    @media screen and (min-width: 576px) {
      font-size: 74.25%;
    }
    @media screen and (min-width: 768px) {
      font-size: 80.75%;
    }
    @media screen and (min-width: 992px) {
      font-size: 87.25%;
    }
    @media screen and (min-width: 1200px) {
      font-size: 93.75%;
    }
  }

  body {
    height: 100vh;
    width: 100vw;

    text-rendering: optimizelegibility !important;
    -webkit-font-smoothing: antialiased !important;
    scroll-behavior: smooth;

    background: var(--color-primary-darker);
    background: linear-gradient(
      180deg,
      var(--color-primary-darker) 0%,
      var(--color-primary-base) 100%
    );
    background-attachment: fixed;
  }

  body div#root {
    height: 100%;
    width: 100%;

    background: var(--color-primary-darker);
    background: linear-gradient(
      180deg,
      var(--color-primary-darker) 0%,
      var(--color-primary-base) 100%
    );

    background-attachment: fixed;
  }

  body,
  input,
  textarea,
  button,
  select,
  span,
  p {
    font-family: Roboto, sans-serif;
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: inherit;
  }

  input,
  select {
    border: none;
    background-image: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }

  a {
    background: none;
    color: inherit;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  ul, li {
    list-style: none;
  }

  ::-webkit-scrollbar {
    width: 0.6rem;
    height: 0.6rem;
    margin-right: 10px;
  }
  ::-webkit-scrollbar-corner {
    border: none;
    background: none;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #4a4f6990;
    border-radius: 3px;
    cursor: move;
  }
  ::-webkit-scrollbar-track {
    background-color: #b8b8be90;
    border: none;
  }
`;
