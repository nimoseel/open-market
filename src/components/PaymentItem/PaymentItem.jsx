import React from 'react';
import Price from '../Etc/Price';
import * as S from '../PaymentItem/_style';

const PaymentItem = (props) => {
    const {product_id, product_name, store_name, price, image, quantity, shipping_fee} = props;
    
    return (
        <S.ItemLi key={product_id}>
            <S.ItemImg src={image} alt={product_name} />
            <S.ItemInfoDiv>
                <S.GrayTxt>{store_name}</S.GrayTxt>
                <S.ProductName>{product_name}</S.ProductName>
                <S.GrayTxt>수량: {quantity}개</S.GrayTxt>
            </S.ItemInfoDiv>
            <S.Discount>-</S.Discount>
            <S.PriceDiv>
                {
                    shipping_fee ? 
                    <S.Shipping>{shipping_fee}원</S.Shipping>
                    :
                    <S.Shipping>무료배송</S.Shipping>
                }
                <S.Price>
                    <Price price={price} numsize={18} margin={0} txtsize={18} color={'--black'}/>
                </S.Price>
            </S.PriceDiv>
        </S.ItemLi>
    );
};

export default PaymentItem;
