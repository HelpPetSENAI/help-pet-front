import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    :root {
        --logo-font:"Irish Grover", system-ui;
        --main-font:"Archivo", sans-serif;

        --clr-green-50: #E6FFE6;
        --clr-green-100: #B8FFB8;
        --clr-green-200: #8AFF8A;
        --clr-green-300: #5CFF5C;
        --clr-green-400: #2EFF2E;
        --clr-green-500: #00FF00;
        --clr-green-600: #00D100;
        --clr-green-700: #00A300;
        --clr-green-800: #007500;
        --clr-green-900: #004700;
        --clr-green-1000: #001A00;
        
        --clr-magenta-50: #FFE6FF;
        --clr-magenta-100: #FFB8FF;
        --clr-magenta-200: #FF8AFF;
        --clr-magenta-300: #FF5CFF;
        --clr-magenta-400: #FF2EFF;
        --clr-magenta-500: #FF00FF;
        --clr-magenta-600: #D100D1;
        --clr-magenta-700: #A300A3;
        --clr-magenta-800: #750075;
        --clr-magenta-900: #470047;
        --clr-magenta-1000: #1A001A;
        
        --clr-cyan-50: #E6FFFF;
        --clr-cyan-100: #B8FFFF;
        --clr-cyan-200: #8AFFFF;
        --clr-cyan-300: #5CFFFF;
        --clr-cyan-400: #2EFFFF;
        --clr-cyan-500: #00FFFF;
        --clr-cyan-600: #00D1D1;
        --clr-cyan-700: #00A3A3;
        --clr-cyan-800: #007575;
        --clr-cyan-900: #004747;
        --clr-cyan-1000: #001A1A;
        
        --clr-blue-50: #E6E6FF;
        --clr-blue-100: #B8B8FF;
        --clr-blue-200: #8A8AFF;
        --clr-blue-300: #5C5CFF;
        --clr-blue-400: #2E2EFF;
        --clr-blue-500: #0000FF;
        --clr-blue-600: #0000D1;
        --clr-blue-700: #0000A3;
        --clr-blue-800: #000075;
        --clr-blue-900: #000047;
        --clr-blue-1000: #00001A;
        
        --clr-yellow-50: #FFFFE6;
        --clr-yellow-100: #FFFFB8;
        --clr-yellow-200: #FFFF8A;
        --clr-yellow-300: #FFFF5C;
        --clr-yellow-400: #FFFF2E;
        --clr-yellow-500: #FFFF00;
        --clr-yellow-600: #D1D100;
        --clr-yellow-700: #A3A300;
        --clr-yellow-800: #757500;
        --clr-yellow-900: #474700;
        --clr-yellow-1000: #1A1A00;

        --clr-red-50: #FFE6E6;
        --clr-red-100: #FFB8B8;
        --clr-red-200: #FF8A8A;
        --clr-red-300: #FF5C5C;
        --clr-red-400: #FF2E2E;
        --clr-red-500: #FF0000;
        --clr-red-600: #D10000;
        --clr-red-700: #A30000;
        --clr-red-800: #750000;
        --clr-red-900: #470000;
        --clr-red-1000: #1A0000;
        
        --clr-neutral-100: #FFFFFF;
        --clr-neutral-200: #E3E3E3;
        --clr-neutral-300: #C6C6C6;
        --clr-neutral-400: #AAAAAA;
        --clr-neutral-500: #8E8E8E;
        --clr-neutral-600: #717171;
        --clr-neutral-700: #555555;
        --clr-neutral-800: #393939;
        --clr-neutral-900: #1C1C1C;
        --clr-neutral-1000: #000000;
    }
`

export default GlobalStyle