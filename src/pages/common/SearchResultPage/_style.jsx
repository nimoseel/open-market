import noresult from '../../../assets/noresult.png';
import styled from 'styled-components';

export const SearchTxt = styled.p`
    box-sizing: border-box;
    height: 50px;
    padding: 0 20px;
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: var(--bold);
    line-height: 50px;
    background-color: var(--main-light);
    color: var(--main);
`

export const SearchCount = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1280px;
    height: 110px;
    margin: 0 auto 50px;
    border-bottom: 1px dotted var(--main);
    gap: 15px;

    @media screen and (max-width: 1280px) {
        max-width: 900px;
    }

    @media screen and (max-width: 768px) {
        max-width: 450px;
    }
`

export const Main = styled.main`
    width: 100%;
    max-width: 1280px;
    margin: 50px auto;
`

export const SearchResultTxt = styled.p`
    padding: 0 19px;
    font-size: 16px;
    font-weight: var(--regular);
    line-height: 20px;
    color: var(--black);
`

export const ProductUl = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    max-width: 1280px;
    margin: 0 auto;
    gap: 70px;
    opacity: 0;
    transition: opacity 1s, transform 1s;
    transform: translateY(10px); 
    &.show {
        opacity: 1;
        transform: translateY(0);
    }

    @media screen and (max-width: 1280px) {
        max-width: 900px;
        grid-row-gap: 50px;
        grid-column-gap: 20px;
    }

    @media screen and (max-width: 768px) {
        max-width: 450px;
        grid-template-columns: 1fr 1fr;
    }
`

export const NoResult = styled.div`
    width: 250px;
    height: calc(100vh - 673px);
    margin: 0 auto;
    background-image: url(${noresult}) ;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;

    @media screen and (max-width: 768px) {
        height: calc(100vh - 711px);
    }
`

export const NoResultTxt = styled(SearchResultTxt)`
    color: var(--main);
`