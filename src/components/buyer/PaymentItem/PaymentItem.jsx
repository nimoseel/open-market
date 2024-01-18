import React from 'react';
import * as S from '../PaymentItem/_style';
import LogisticsImg from '../../../assets/logistics-icon';

const PaymentItem = (props) => {
    const {
        product_id,
        product_name,
        store_name,
        price,
        image,
        quantity,
        shipping_fee,
    } = props;

    return (
        <S.ItemLi key={product_id}>
            <S.ItemImg src={image} alt={product_name} />
            <S.ItemInfoDiv>
                <S.GrayTxt>{store_name}</S.GrayTxt>
                <S.ProductName>{product_name}</S.ProductName>
                <S.GrayTxt>수량: {quantity}개</S.GrayTxt>
            </S.ItemInfoDiv>

            <S.PriceDiv>
                <S.ShippingDiv>
                    <LogisticsImg color={'var(--main)'} />
                    {shipping_fee ? (
                        <S.ShippingPrice price={shipping_fee} />
                    ) : (
                        <S.Shipping>무료배송</S.Shipping>
                    )}
                </S.ShippingDiv>

                <div>
                    <S.Price price={price} />
                </div>
            </S.PriceDiv>
        </S.ItemLi>
    );
};

export default PaymentItem;
