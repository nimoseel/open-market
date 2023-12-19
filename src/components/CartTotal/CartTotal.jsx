import React from 'react';
import MinusIcon from '../../assets/icon-minus2.svg';
import PlusIcon from '../../assets/icon-plus2.svg';
import * as S from '../CartTotal/_style';

const total = ({totalPrice, totalFee}) => {
    return (
        <S.TotalUl>
            <S.TotalLi>
                <S.TotalTxt>총 상품금액</S.TotalTxt>
                <S.Price price={totalPrice}/>
            </S.TotalLi>
            <img src={MinusIcon} alt=''/>
            <S.TotalLi>
                <S.TotalTxt>상품 할인</S.TotalTxt>
                <S.Price price={'0'}/>
            </S.TotalLi>
            <img src={PlusIcon} alt=''/>
            <S.TotalLi>
                <S.TotalTxt>배송비</S.TotalTxt>
                <S.Price price={totalFee}/>
            </S.TotalLi>
            <S.TotalLi>
                <S.TotalTxt>결제 예정 금액</S.TotalTxt>
                <S.TotalPrice price={totalPrice+totalFee}/>
            </S.TotalLi>
        </S.TotalUl>
    );
};

export default total;
