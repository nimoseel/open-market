import styled from 'styled-components';

export const Main = styled.main`
    margin: 50px 0;
    min-height: 500px;
`

export const ProductUl = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    gap: 70px;
    opacity: 0;
    transition: opacity 3s, transform 3s; 
    transform: translateY(50px); 
    &.show {
        opacity: 1;
        transform: translateY(0);
    }

    @media screen and (max-width: 1024px) {
        max-width: 700px;
        grid-template-columns: 1fr 1fr;
        gap: 50px;
    }

    @media screen and (max-width: 768px) {
        max-width: 540px;
    }
`