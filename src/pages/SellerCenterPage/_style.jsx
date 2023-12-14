import styled from 'styled-components';
import { BtnMS } from '../../components/Etc/Button';
import plusIcon from '../../assets/icon-plus.svg'

export const TitleDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1280px;
    height: 130px;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        width: 540px;
    }
`

export const Title = styled.h1`
    font-size: 36px;
    font-weight: var(--bold);
    line-height: 130px;
`

export const StoreName = styled.strong`
    margin-left: 16px;
    font-weight: var(--semi-bold);
    color: var(--main);
`

const StyledUploadBtn = styled(BtnMS)`
    display: flex;
    align-items: center;
    width: 160px;
    padding-left: 18px;
    box-sizing: border-box;
    font-size: 18px;
    font-weight: var(--semi-bold);
    gap: 9px;
`

const StyledPlusImg = styled.span`
    display: inline-block;
    width: 30px;
    height: 30px;
    content: '';
    background-image: url(${plusIcon});
    background-repeat: no-repeat;
    background-size: 30px;
`

export const UploadBtn = ({onClick}) => {
    return (
        <StyledUploadBtn onClick={onClick}>
            <StyledPlusImg/>
            상품 업로드
        </StyledUploadBtn>
    )
}

export const MainDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 1280px;
    margin: 0 auto;
    gap: 30px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 540px;
    }
`

export const MenuUl = styled.ul`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const StyledMenuLi = styled.button`
    width: 250px;
    height: 50px;
    margin-bottom: 10px;
    padding: 13px 20px;
    text-align: left;
    font-size: 16px;
    font-weight: var(--semi-bold);
    background-color: var(${(props) => props.isFocused === true ? '--main': '--white'});
    color: var(${(props) => props.isFocused === true ? '--white': '--black'});
    
    &:hover{
        color: var(--black);
        background-color: var(--main-light);
    }
`

export const MenuLi = ({onClick, content, isFocused}) => {
    return (
        <li onClick={onClick}>
            <StyledMenuLi isFocused={isFocused}>{content}</StyledMenuLi>
        </li>
    )
}

export const ContentDiv = styled.div`
    width: 100%;
    max-width: 1000px;
    height: 800px;
    margin-bottom: 96px;
    border: 1px solid var(--disabled);
    border-radius: 5px;
    background-color: var(--menu);
    overflow: hidden;
`

export const ItemIndexUl = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 18px 45px 18px 30px;
    box-sizing: border-box;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom: 1px solid var(--disabled);
    font-size: 18px;
    font-weight: var(--regular);
    background-color: var(--white);

    @media screen and (max-width: 768px) {
        padding: 18px;
    }
`

export const ItemIndexLi = styled.li`
    text-align: center;

    &:first-child{
        width: 450px;

        @media screen and (max-width: 768px) {
            width: 270px;
        }
    }

    &:nth-child(2){
        width: 200px;
    }
    
    &:nth-child(3), &:nth-child(4){
        width: 100px;
    }
`

export const SellerItemUl = styled.ul`
    overflow-y: scroll;
`

export const UlWrapper = styled.div`
    height: 740px;
    background-color: transparent;
    overflow-y: scroll;
`