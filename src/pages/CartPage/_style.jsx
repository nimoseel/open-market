import styled from 'styled-components';
import { BtnL } from '../../components/Etc/Button';

export const CartTitleDiv = styled.div`
    width: 1280px;
    margin: 0 auto 35px;
    text-align: center;
`

export const CartHeader = styled.h1`
    display: inline-block;
    margin: 54px 0 52px;
    font-weight: var(--bold);
    font-size: 36px;
    line-height: 44px;
`

export const MenuUl = styled.ul`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 60px;
    padding: 21px 126px 19px 32px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: var(--menu);
    font-size: 18px;
    line-height: 22.54px;
`

export const MenuLi = styled.li`
    margin: 0;
    font-weight: var(--regular);
    font-size: 18px;
    line-height: 22.54px;

    &:nth-child(2){
        margin-left: 314px;
        margin-right: 379px;
    };

    &:nth-child(3){
        margin-right: 238px;
    };
`

export const EmptyDiv = styled.div`
    width: 250px;
    margin: 200px auto 0;
    text-align: center;
`

export const EmptyBoldTxt = styled.p`
    margin-bottom: 17px;
    font-weight: var(--bold);
    font-size: 18px;
    line-height: 22.54px;
`

export const EmptyTxt = styled.p`
    font-weight: var(--regular);
    font-size: 14px;
    color: var(--dark-gray);
    line-height: 17.53px;
`

export const OrderBtn = styled(BtnL)`
    display: block;
    width: 220px;
    margin: 0 auto 60px;
`