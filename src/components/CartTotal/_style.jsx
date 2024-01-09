import styled from 'styled-components';
import BasePrice from '../Etc/Price';

export const TotalUl = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1280px;
    height: 150px;
    margin: 80px auto 40px;
    box-sizing: border-box;
    border-radius: 10px;
    text-align: center;
    background-color: var(--menu);

    @media screen and (max-width: 1280px) {
        max-width: 900px;
    }

    @media screen and (max-width: 768px) {
        max-width: 450px;
        height: 120px;
        margin: 35px auto;
        padding: 0 12px;
    }
`;

export const TotalTxt = styled.p`
    margin-bottom: 12px;
    font-size: 16px;
    font-weight: var(--regular);
    line-height: 20.03px;
    color: var(--black);

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

export const TotalLi = styled.li`
    width: 303px;

    @media screen and (max-width: 768px) {
        width: fit-content;
    }
`;

export const Price = ({ price }) => {
    return (
        <BasePrice
            price={price}
            numsize={24}
            margin={2}
            txtsize={16}
            color={'--black'}
        />
    );
};

export const TotalPrice = ({ price }) => {
    return (
        <BasePrice
            price={price}
            numsize={36}
            margin={2}
            txtsize={18}
            color={'--main'}
        />
    );
};
