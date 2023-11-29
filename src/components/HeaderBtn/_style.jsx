import styled from 'styled-components';
import { BtnMS } from '../Etc/Button';

export const Button = styled.button`
    display: flex;
    flex-direction: column;
    width: 56px;
    height: 50px;
    border: none;
    font-size: 12px;
    color: var(--dark-gray);
    background-color: var(--white);
    align-items: center;
    cursor: pointer;
`

export const Img = styled.img`
    width: 32px;
    height: 32px;
    margin-bottom: 4px;
    background-repeat: no-repeat;
    background-size: contain;
`

export const Span = styled.span`
    display: inline-block;
    line-height: 14px;
`

export const MyPageSpan = styled(Span)`
    margin-top: 7px;
`

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
