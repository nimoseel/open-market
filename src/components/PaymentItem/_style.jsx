import styled from 'styled-components';

export const ItemLi = styled.li`
    display: flex;
    width: 100%;
    height: 130px;
    margin-bottom: 16px;
    padding: 8px 10px 18px 8px;
    box-sizing: border-box;
    border-bottom: 1px solid var(--disabled);
    align-items: center;
`

export const ItemImg = styled.img`
    width: 104px;
    height: 104px;
    margin-right: 36px;
    border-radius: 10px;
    object-fit: cover;
`

export const ItemInfoDiv = styled.div`
    width: 500px;
`

export const GrayTxt  = styled.p`
    font-weight: var(--regular);
    font-size: 14px;
    color: var(--dark-gray);
    line-height: 17.53px;
`

export const ProductName = styled.p`
    margin: 6px 0 10px;
    font-weight: var(--regular);
    font-size: 18px;
    color: var(--black);
    line-height: 22px;
`

export const Discount = styled.p`
    width: 100px;
    font-size: 18px;
    line-height: 22.54px;
    color: var(--dark-gray);
    text-align: center;
`

export const PriceDiv = styled.div`
    display: flex;
    line-height: 22.54px;
    align-items: center;
    text-align: center;
`

export const Shipping = styled.p`
    font-weight: var(--regular);
    font-size: 18px;
    color: var(--dark-gray);
    width: 200px;
    margin-left: 75px;
`

export const Price = styled.div`
    width: 200px;
    margin-left: 47px;
`