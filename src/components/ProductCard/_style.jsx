import styled from 'styled-components';
import BasePrice from '../Etc/Price';

export const ProductLi = styled.li`
    width: 380px;
    max-height: 490px;
    cursor: pointer;
`

export const ItemImg = styled.img`
    width: 380px;
    height: 380px;
    box-sizing: border-box;
    border: 1px solid #C4C4C4;
    border-radius: 10px;
    object-fit: cover;
    transition: filter 0.3s ease-in-out;
    &:hover {
        filter: brightness(85%);
    }
`

export const StoreName = styled.p`
    margin: 16px 0 10px;    
    font-weight: var(--regular);
    color: var(--dark-gray);
`

export const ProductName = styled.p`
    margin: 10px 0;
    font-size: 18px;
`

export const Price = ({price}) => {
    return (
        <BasePrice price={price} numsize={24} margin={2} txtsize={16} color={'--black'}/>
    )
}