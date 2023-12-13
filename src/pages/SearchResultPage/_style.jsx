import noresult from '../../assets/noresult.png';
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
    height: 110px;
    margin: 0 auto 50px;
    border-bottom: 1px dotted var(--main);
    gap: 15px;
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
    width: 1280px;
    margin: 0 auto;
    gap: 70px;
    opacity: 0;
    transition: opacity 1s, transform 1s;
    transform: translateY(10px); 
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

export const NoResult = styled.div`
    width: 250px;
    height: 300px;
    margin: 0 auto;
    background-image: url(${noresult}) ;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    
    @media (min-width: 1280px) {
        height: 800px;
    }
`

export const NoResultTxt = styled(SearchResultTxt)`
    color: var(--main);
`