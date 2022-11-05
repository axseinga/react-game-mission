import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { Fonts } from './fonts';

const GlobalStyle = createGlobalStyle`
${reset};
${Fonts};

:root {
    --root-size: 3vh;
    --root-min: 15px;
    --root-max: 20px;
    --gap: 1rem;
    --font-game: "Arcade", sans-serif;
}

* {
    box-sizing: border-box;
}
html {
    font-size: clamp(var(--root-min), var(--root-size), var(--root-max));
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    color: black;
};

body { 
    box-sizing: inherit;
    font-family: inherit;
    font-size: inherit;
}
`;

export default GlobalStyle;
