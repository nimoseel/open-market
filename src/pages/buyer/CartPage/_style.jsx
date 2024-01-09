import styled from 'styled-components';
import { BtnL } from '../../../components/Etc/Button';

export const CartTitleDiv = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto 35px;
    text-align: center;
`;

export const CartHeader = styled.h1`
    display: inline-block;
    margin: 54px 0 52px;
    font-size: 36px;
    font-weight: var(--bold);
    line-height: 44px;

    @media screen and (max-width: 768px) {
        font-size: 22px;
    }
`;

export const MenuUl = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    margin: 0 auto;
    padding-left: 32px;
    padding-right: 140px;
    box-sizing: border-box;
    border-radius: 10px;
    font-size: 18px;
    line-height: 22.54px;
    background-color: var(--menu);

    @media screen and (max-width: 1280px) {
        width: 900px;
    }

    @media screen and (max-width: 768px) {
        width: 450px;
    }
`;

export const MenuLi = styled.li`
    font-size: 18px;
    font-weight: var(--regular);
    line-height: 22.54px;

    &:nth-child(3) {
        width: 280px;

        @media screen and (max-width: 1280px) {
            width: 190px;
        }
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const CartContentDiv = styled.div`
    transition:
        opacity 1s,
        transform 1s;
    transform: translateY(10px);
    opacity: 0;

    &.show {
        transform: translateY(0);
        opacity: 1;
    }
`;

export const EmptyDiv = styled(CartContentDiv)`
    width: 250px;
    margin: 200px auto 0;
    text-align: center;
`;

export const EmptyBoldTxt = styled.p`
    margin-bottom: 17px;
    font-size: 18px;
    font-weight: var(--bold);
    line-height: 22.54px;
`;

export const EmptyTxt = styled.p`
    font-size: 14px;
    font-weight: var(--regular);
    line-height: 17.53px;
    color: var(--dark-gray);
`;

export const OrderBtn = styled(BtnL)`
    display: block;
    width: 220px;
    margin: 0 auto 60px;
`;
