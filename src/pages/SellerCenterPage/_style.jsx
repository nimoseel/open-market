import styled from 'styled-components';
import { BtnMS } from '../../components/Etc/Button';
import plusIcon from '../../assets/icon-plus.svg'

export const TitleDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1280px;
    height: 130px;
    margin: 0 auto;
    align-items: center;
`

export const Title = styled.h1`
    font-size: 36px;
    line-height: 130px;
    font-weight: var(--bold);
`

export const StoreName = styled.strong`
    margin-left: 16px;
    color: var(--main);
    font-weight: var(--semi-bold);
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
    width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    gap: 30px;
`

const StyledMenuLi = styled.button`
    padding: 13px 20px;
    margin-bottom: 10px;
    text-align: left;
    width: 250px;
    height: 50px;
    background-color: var(${(props) => props.isFocused === true ? '--main': '--white'});
    color: var(${(props) => props.isFocused === true ? '--white': '--black'});
    font-size: 16px;
    font-weight: var(--semi-bold);
    &:hover{
        color: var(--black);
        background-color: #f7efff;
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
    border: 1px solid var(--disabled);
    border-radius: 5px;
    width: 100%;
    height: 800px;
    margin-bottom: 96px;
    background-color: var(--menu);
    overflow: hidden;
`

export const ItemIndexUl = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-weight: var(--regular);
    height: 60px;
    padding: 18px 45px 18px 30px;
    border-bottom: 1px solid var(--disabled);
    background-color: var(--white);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    box-sizing: border-box;
`

export const ItemIndexLi = styled.li`
    text-align: center;
    &:first-child{
        width: 450px;
    }
    &:nth-child(2){
        width: 200px;
    }
    &:nth-child(3), &:nth-child(4){
        width: 100px;
    }
`

export const SellerItemUl = styled.ul`
    /* overflow-y: scroll; */
`

export const UlWrapper = styled.div`
    height: 740px;
    overflow-y: scroll;
    background-color: transparent;
`