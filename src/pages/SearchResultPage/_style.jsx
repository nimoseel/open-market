import styled from 'styled-components';

export const Main = styled.main`
    margin: 50px 0;
`

export const SearchCount = styled.div`
    display: flex;
    flex-direction: column;
    width: 1280px;
    height: 110px;
    border-bottom: 1px dotted var(--main);
    margin: 0 auto 50px;
    gap: 15px;
`

export const SearchTxt = styled.p`
    box-sizing: border-box;
    height: 50px;
    padding: 0 20px;
    margin-bottom: 5px;
    color: var(--main);
    font-size: 20px;
    font-weight: var(--bold);
    line-height: 50px;
    background-color: var(--main-light);
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
`