import styled from 'styled-components';
import BasePrice from '../../common/Etc/Price';

export const TotalUl = styled.ul`
    display: flex;
    justify-content: space-evenly;
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
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: var(--regular);
    line-height: 20.03px;
    color: var(--dark-gray);

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

const PriceDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
`;

export const Price = ({ price }) => {
    return (
        <PriceDiv>
            <BasePrice
                price={price}
                numSize={24}
                margin={2}
                txtSize={18}
                numColor={'--txt-color'}
                txtColor={'--txt-color'}
            />
        </PriceDiv>
    );
};

export const TotalPrice = ({ price }) => {
    return (
        <PriceDiv>
            <BasePrice
                price={price}
                numSize={30}
                margin={2}
                txtSize={18}
                numColor={'--main'}
                txtColor={'--txt-color'}
            />
        </PriceDiv>
    );
};
