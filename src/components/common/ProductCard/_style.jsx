import styled from 'styled-components';
import BasePrice from '../Etc/Price';

export const ProductLi = styled.li`
    cursor: pointer;
`;

export const ItemImg = styled.img`
    width: 380px;
    height: 380px;
    box-sizing: border-box;
    border: 1px solid var(--disabled);
    border-radius: 10px;
    object-fit: cover;
    transition: filter 0.3s ease-in-out;
    &:hover {
        filter: brightness(85%);
    }

    @media screen and (max-width: 1280px) {
        width: 280px;
        height: 280px;
    }

    @media screen and (max-width: 768px) {
        width: 215px;
        height: 215px;
    }
`;

export const StoreName = styled.p`
    margin: 16px 0 10px;
    font-size: 1rem;
    font-weight: var(--regular);
    color: var(--dark-gray);
`;

export const ProductName = styled.p`
    margin: 10px 0;
    font-size: 1.125rem;
    color: var(--txt-color);
`;

export const Price = ({ price }) => {
    return (
        <BasePrice
            price={price}
            numSize={24}
            margin={2}
            txtSize={16}
            numColor={'--txt-color'}
            txtColor={'--txt-color'}
        />
    );
};
