import styled from 'styled-components';
import BasePrice from '../Etc/Price';

export const TotalUl = styled.ul`
    display: flex;
    width: 1280px;
    height: 150px;
    margin: 80px auto 40px;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: var(--menu);
    text-align: center;
    align-items: center;
`

export const TotalTxt = styled.p`
    margin-bottom: 12px;
    font-weight: var(--regular);
    font-size: 16px;
    color: var(--black);
    line-height: 20.03px;
`

export const TotalLi = styled.li`
    width: 303px;
`

export const Price = ({price}) => {
    return (
        <BasePrice price={price} numsize={24} margin={2} txtsize={16} color={'--black'}/>
    )
}

export const TotalPrice = ({price}) => {
    return (
        <BasePrice price={price} numsize={36} margin={2} txtsize={18} color={'--main'} />
    )
}