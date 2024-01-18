import styled from 'styled-components';
import BasePrice from '../../common/Etc/Price';

export const ItemLi = styled.li`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    border-bottom: 1px solid var(--disabled);
    padding: 10px 0;
`;

export const ItemImg = styled.img`
    min-width: 130px;
    max-width: 130px;
    height: 130px;
    margin-right: 36px;
    border-radius: 10px;
    object-fit: cover;
`;

export const ItemInfoDiv = styled.div`
    width: 100%;
    max-width: 500px;
`;

export const GrayTxt = styled.p`
    font-size: 14px;
    font-weight: var(--regular);
    line-height: 17.53px;
    color: var(--dark-gray);
`;

export const ProductName = styled.p`
    margin: 10px 0;
    font-size: 18px;
    font-weight: var(--regular);
    line-height: 22px;
    color: var(--txt-color);
`;

export const Discount = styled.p`
    width: 100px;
    font-size: 18px;
    line-height: 22.54px;
    text-align: center;
    color: var(--dark-gray);

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const PriceDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 600px;
    line-height: 22.54px;

    @media screen and (max-width: 768px) {
        width: 200px;
        flex-direction: column;
        align-items: end;
        gap: 10px;
    }
`;

export const ShippingDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 130px;
        background-size: 25px;
    }
`;

export const Shipping = styled.p`
    margin-left: 5px;
    font-size: 18px;
    font-weight: var(--regular);
    color: var(--dark-gray);

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`;

export const ShippingPrice = ({ price }) => {
    return (
        <div style={{ marginLeft: '5px' }}>
            <BasePrice
                price={price}
                numSize={18}
                margin={0}
                txtSize={18}
                numColor={'--dark-gray'}
                txtColor={'--dark-gray'}
            />
        </div>
    );
};

export const Price = ({ price }) => {
    return (
        <BasePrice
            price={price}
            numSize={20}
            margin={0}
            txtSize={18}
            numColor={'--txt-color'}
            txtColor={'--txt-color'}
        />
    );
};
