import styled from 'styled-components';
import { BtnMS } from '../Etc/Button';
import SearchIconImg from '../../assets/icon-search.svg';
import LogoHodu from '../../assets/Logo-hodu.svg';


export const HeaderDiv = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 90px;
    padding-top: 20px;
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.1);
`

export const HeaderContent = styled.header`
    display: flex;
    justify-content: space-between;
    width: 1280px;
    margin: 0 auto;
    box-sizing: border-box;
`

export const SearchInput = styled.input`
    width: 400px;
    height: 46px;
    margin: 0 30px;
    padding: 0 62px 0 22px;
    border: 2px solid var(--green);
    border-radius: 50px;
`

export const LogoIcon = styled.div`
    display: inline-block;
    width: 124px;
    height: 38px;
    background-image: url(${LogoHodu}) ;
    background-repeat: no-repeat;
    background-size: contain;
    vertical-align: middle;
`

export const SearchIcon = styled.div`
    display: inline-block;
    position: relative;
    top: 9px;
    right: 80px;
    width: 28px;
    height: 28px;
    background-image: url(${SearchIconImg});
    background-repeat: no-repeat;
    background-size: contain;
`

export const HeaderBtnDiv = styled.div`
    display: flex;
    position: relative;
    gap: 26px;
`

// seller style
export const SellerBtn = styled(BtnMS)`
    display: flex;
    justify-content: space-around;
    width: 168px;
    padding: 11px 20px;
    box-sizing: border-box;
    font-size: 18px;
    line-height: 22.54px;
    align-items: center;
`

export const SellerHeaderDiv = styled(HeaderDiv)`
    padding: 26px 0;
`

export const SellerHeaderContent = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    width: 1280px;
    margin: 0 auto;
`

export const SellerHeaderTitle = styled.p`
    width: 145px;
    height: 38px;
    font-weight: var(--semi-bold);
    font-size: 30px;
    line-height: 38px;
`
