import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}

    :root{
        /* color */
        --main :#5D23A8;
        --main-light :#f7efff;
        --green : #21BF48;
        --red : #EB5757;
        --black : #000000;
        --dark-gray : #767676;
        --white : #FFFFFF;
        --disabled: #C4C4C4;
        --drop-down : #E0E0E0;
        --menu : #F2F2F2;

        /* font-weight */
        --bold : 700;
        --semi-bold : 500;
        --regular : 400;
    }

    body, button, input, textarea {
        font-family: 'IBM Plex Sans KR', sans-serif;
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
`