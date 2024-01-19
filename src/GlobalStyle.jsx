import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`

    ${reset}

    :root{
        /* color */
        --main :${({ theme }) => (theme.isDarkMode ? '#8527ff' : '#5D23A8')};
        --main-light : ${({ theme }) =>
            theme.isDarkMode ? '#d1b9ea' : '#f7efff'};
        --menu-main-light : ${({ theme }) =>
            theme.isDarkMode ? '#6427b4' : '#f7efff'};
        --green : #21BF48;
        --red : #EB5757;
        --black : #000000;
        --dark-gray : #767676;
        --white : #FFFFFF;
        --drop-down : #E0E0E0;
        --disabled: #C4C4C4;
        --bg-color: ${({ theme }) =>
            theme.isDarkMode ? '#1E1E22' : '#FFFFFF'};
        --txt-color: ${({ theme }) =>
            theme.isDarkMode ? '#FFFFFF' : '#000000'};
        --menu : ${({ theme }) => (theme.isDarkMode ? '#333' : '#F2F2F2')};
        --shadow :  ${({ theme }) =>
            theme.isDarkMode ? '#333337' : '#E7E7E7'};
        --amount-disabled : ${({ theme }) =>
            theme.isDarkMode ? '#333337' : '#C4C4C4'};

        /* font-weight */
        --bold : 700;
        --semi-bold : 500;
        --regular : 400;
    }

    body, header, button, input, textarea {
        font-family: 'IBM Plex Sans KR', sans-serif;
        background-color: var(--bg-color);
        color: var(--txt-color);
        transition: background-color 0.5s, color 0.3s;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    input{
        box-sizing: border-box;
        background-color: transparent;
        width: 100%;
    }

    input:focus{
        outline: none;
        border-color: var(--main);
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        -webkit-text-fill-color: #000;
        -webkit-box-shadow: 0 0 0px 1000px #fff inset;
        box-shadow: 0 0 0px 1000px #fff inset;
        transition: background-color 5000s ease-in-out 0s;
    }


    button{
        display: block;
        padding: 0;
        border: none;
        border-radius: 5px;
        box-sizing: border-box;
        background-color: transparent;
        cursor: pointer;
    }

    button:focus{
        outline: none;
        border-color: var(--main);
    }

    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        -o-appearance: none;
        appearance: none; 
    }

    select::-ms-expand{
        display:none;
    }

    select {
        width:152px;
        height: 54px;
        padding: 0 16px;
        border-radius: 5px;
        border: 1px solid var(--disabled);
    }

    select:focus{
        border-color: var(--main);
    }

    .ellipsis{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
`;
